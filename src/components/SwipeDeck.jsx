import React, {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { animated, to, useSpring } from "@react-spring/web";

const DEFAULT_WIDTH = 340;
const DEFAULT_HEIGHT = 500;

const SwipeDeck = forwardRef(function SwipeDeck(
  { items, renderCard, onSwipe, onCardLeftScreen, width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT },
  ref
) {
  const topItem = items?.[items.length - 1] ?? null;
  const underItems = useMemo(() => {
    if (!items || items.length <= 1) return [];
    // Render up to 2 cards underneath for depth.
    return items.slice(Math.max(0, items.length - 3), items.length - 1);
  }, [items]);

  const dragState = useRef({
    pointerId: null,
    startX: 0,
    startY: 0,
    baseX: 0,
    baseY: 0,
  });

  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const [{ x, y, rot, scale }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    rot: 0,
    scale: 1,
    config: { tension: 360, friction: 32 },
  }));

  const resetCard = () => {
    api.set({ x: 0, y: 0, rot: 0, scale: 1 });
  };

  const commitSwipe = (direction) => {
    if (!topItem || isAnimating) return;
    setIsAnimating(true);

    onSwipe?.(direction, topItem);

    const offscreenX =
      (typeof window !== "undefined" ? window.innerWidth : 1200) * 1.2;
    const targetX = direction === "right" ? offscreenX : -offscreenX;
    const targetRot = direction === "right" ? 22 : -22;

    api.start({
      x: targetX,
      y: 0,
      rot: targetRot,
      scale: 1,
      config: { tension: 260, friction: 24 },
      onRest: () => {
        onCardLeftScreen?.(topItem._id);
        resetCard();
        setIsAnimating(false);
      },
    });
  };

  useImperativeHandle(
    ref,
    () => ({
      swipe: (direction) => {
        if (direction !== "left" && direction !== "right") return;
        commitSwipe(direction);
      },
      swipeLeft: () => commitSwipe("left"),
      swipeRight: () => commitSwipe("right"),
    }),
    [topItem, isAnimating]
  );

  const onPointerDown = (e) => {
    if (!topItem || isAnimating) return;

    dragState.current.pointerId = e.pointerId;
    dragState.current.startX = e.clientX;
    dragState.current.startY = e.clientY;
    dragState.current.baseX = x.get();
    dragState.current.baseY = y.get();

    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    api.start({ scale: 1.03, immediate: true });
  };

  const onPointerMove = (e) => {
    if (!isDragging || dragState.current.pointerId !== e.pointerId) return;

    const dx = e.clientX - dragState.current.startX;
    const dy = e.clientY - dragState.current.startY;
    const nextX = dragState.current.baseX + dx;
    const nextY = dragState.current.baseY + dy;

    api.start({
      x: nextX,
      y: nextY,
      rot: nextX / 14,
      immediate: true,
    });
  };

  const onPointerUp = (e) => {
    if (!isDragging || dragState.current.pointerId !== e.pointerId) return;

    setIsDragging(false);
    dragState.current.pointerId = null;

    const currentX = x.get();
    const shouldSwipe = Math.abs(currentX) > 120;
    if (shouldSwipe) {
      commitSwipe(currentX > 0 ? "right" : "left");
      return;
    }

    api.start({ x: 0, y: 0, rot: 0, scale: 1, immediate: false });
  };

  const onPointerCancel = () => {
    if (!isDragging) return;
    setIsDragging(false);
    dragState.current.pointerId = null;
    api.start({ x: 0, y: 0, rot: 0, scale: 1, immediate: false });
  };

  const likeOpacity = x.to({
    range: [30, 140],
    output: [0, 1],
    extrapolate: "clamp",
  });
  const nopeOpacity = x.to({
    range: [-140, -30],
    output: [1, 0],
    extrapolate: "clamp",
  });

  return (
    <div
      className="relative"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {underItems.map((item, index) => {
        const depth = underItems.length - 1 - index;
        const depthScale = 1 - depth * 0.035;
        const depthY = depth * 10;
        return (
          <div
            key={item._id}
            className="absolute inset-0"
            style={{
              transform: `translate3d(0, ${depthY}px, 0) scale(${depthScale})`,
            }}
          >
            {renderCard(item)}
          </div>
        );
      })}

      {topItem && (
        <animated.div
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
          style={{
            touchAction: "none",
            transform: to(
              [x, y, rot, scale],
              (xx, yy, rr, ss) =>
                `translate3d(${xx}px, ${yy}px, 0) rotate(${rr}deg) scale(${ss})`
            ),
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerCancel}
        >
          <div className="absolute inset-0 pointer-events-none">
            <animated.div
              style={{ opacity: likeOpacity }}
              className="absolute top-6 left-6 px-4 py-2 rounded-xl border border-emerald-300/40 bg-emerald-400/10 text-emerald-200 font-semibold tracking-wide"
            >
              INTERESTED
            </animated.div>
            <animated.div
              style={{ opacity: nopeOpacity }}
              className="absolute top-6 right-6 px-4 py-2 rounded-xl border border-rose-300/40 bg-rose-400/10 text-rose-200 font-semibold tracking-wide"
            >
              IGNORE
            </animated.div>
          </div>

          {renderCard(topItem)}
        </animated.div>
      )}
    </div>
  );
});

export default SwipeDeck;
