import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constant";

const DEFAULT_AVATAR =
  "https://i.pinimg.com/736x/f1/01/e0/f101e02ae91f92e9e8c70baa78beda12.jpg";

const normalizeSkill = (value) => value.trim().replace(/\s+/g, " ");

const normalizeSkills = (skills) =>
  (Array.isArray(skills) ? skills : [])
    .map((s) => String(s))
    .map((s) => normalizeSkill(s))
    .filter(Boolean);

const skillsSignature = (skills) =>
  normalizeSkills(skills)
    .map((s) => s.toLowerCase())
    .sort()
    .join("|");

const EditProfile = ({ user }) => {
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState("profile");
  const [isSaving, setIsSaving] = useState(false);

  const [fName, setFName] = useState(user?.fName || "");
  const [lName, setLName] = useState(user?.lName || "");
  const [age, setAge] = useState(user?.age || 18);
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl || "");
  const [gender, setGender] = useState(user?.gender || "male");
  const [about, setAbout] = useState(user?.about || "");

  const [skills, setSkills] = useState(
    Array.isArray(user?.skills) ? user.skills : []
  );
  const [skillInput, setSkillInput] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPw, setShowPw] = useState(false);

  const [toast, setToast] = useState({ kind: "", message: "" });
  const [showToast, setShowToast] = useState(false);

  const initialSnapshot = useRef(null);

  useEffect(() => {
    if (!user) return;
    setFName(user.fName || "");
    setLName(user.lName || "");
    setAge(user.age || 18);
    setPhotoUrl(user.photoUrl || "");
    setGender(user.gender || "male");
    setAbout(user.about || "");
    setSkills(Array.isArray(user.skills) ? user.skills : []);

    initialSnapshot.current = {
      fName: user.fName || "",
      lName: user.lName || "",
      age: Number(user.age) || 18,
      photoUrl: user.photoUrl || "",
      gender: user.gender || "",
      about: user.about || "",
      skillsSig: skillsSignature(user.skills),
    };
  }, [user]);

  const snapshot = useMemo(() => {
    return {
      fName: fName || "",
      lName: lName || "",
      age: Number(age) || 18,
      photoUrl: (photoUrl || "").trim(),
      gender: gender || "",
      about: about || "",
      skills: normalizeSkills(skills),
      skillsSig: skillsSignature(skills),
    };
  }, [about, age, fName, gender, lName, photoUrl, skills]);

  const isDirty = useMemo(() => {
    if (!initialSnapshot.current) return false;
    const a = initialSnapshot.current;
    const b = snapshot;
    return (
      a.fName !== b.fName ||
      a.lName !== b.lName ||
      Number(a.age) !== Number(b.age) ||
      a.photoUrl !== b.photoUrl ||
      a.gender !== b.gender ||
      a.about !== b.about ||
      a.skillsSig !== b.skillsSig
    );
  }, [snapshot]);

  const showToastMessage = (message, kind = "success") => {
    setToast({ kind, message });
    setShowToast(true);
    setTimeout(() => setShowToast(false), kind === "error" ? 3200 : 1400);
  };

  const handleCopy = async (value) => {
    try {
      await navigator.clipboard.writeText(String(value || ""));
      showToastMessage("Copied");
    } catch {
      showToastMessage("Copy failed", "error");
    }
  };

  const addSkill = (raw) => {
    const next = normalizeSkill(raw || "");
    if (!next) return;
    if (next.length > 30) {
      showToastMessage("Each skill must be at most 30 characters", "error");
      return;
    }
    if (skills.length >= 20) {
      showToastMessage("You can add up to 20 skills", "error");
      return;
    }
    const exists = skills.some((s) => s.toLowerCase() === next.toLowerCase());
    if (exists) return;
    setSkills([...skills, next]);
  };

  const removeSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  const handleSave = async () => {
    if (!user || isSaving) return;
    setIsSaving(true);
    try {
      const res = await axios.patch(
        `${BASE_URL}/profile/edit`,
        {
          fName: snapshot.fName,
          lName: snapshot.lName,
          age: snapshot.age,
          about: snapshot.about,
          photoUrl: snapshot.photoUrl,
          gender: snapshot.gender,
          skills: snapshot.skills,
        },
        { withCredentials: true }
      );

      // Update redux immediately so NavBar avatar updates after save.
      dispatch(addUser(res.data?.data ?? { ...user, ...snapshot }));
      initialSnapshot.current = {
        fName: snapshot.fName,
        lName: snapshot.lName,
        age: snapshot.age,
        photoUrl: snapshot.photoUrl,
        gender: snapshot.gender,
        about: snapshot.about,
        skillsSig: snapshot.skillsSig,
      };
      showToastMessage("Saved changes");
    } catch (error) {
      showToastMessage(error?.response?.data || "Failed to save", "error");
    } finally {
      setIsSaving(false);
    }
  };

  const handleChangePassword = async () => {
    setPasswordError("");
    if (newPassword !== confirmNewPassword) {
      setPasswordError("New passwords do not match");
      return;
    }
    if ((newPassword || "").length < 8) {
      setPasswordError("New password must be at least 8 characters");
      return;
    }

    try {
      await axios.patch(
        `${BASE_URL}/profile/password`,
        { currentPassword, newPassword },
        { withCredentials: true }
      );
      setCurrentPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
      showToastMessage("Password updated");
    } catch (error) {
      const msg = error?.response?.data || "Error changing password";
      setPasswordError(String(msg));
    }
  };

  if (!user) return null;

  const displayName = `${snapshot.fName} ${snapshot.lName}`.trim() || "Profile";
  const avatarSrc = snapshot.photoUrl || DEFAULT_AVATAR;

  return (
    <div className="min-h-screen w-full py-10 relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-white/[0.03] blur-[120px] rounded-full"></div>
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[120%] h-[800px] border-t border-white/10 rounded-[100%] bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-[320px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                  <img
                    src={avatarSrc}
                    alt="Profile"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = DEFAULT_AVATAR;
                    }}
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 px-2 py-1 rounded-full text-[10px] border border-white/10 bg-[#111]/80 text-white/70">
                  {isDirty ? "Unsaved" : "Saved"}
                </div>
              </div>
              <div className="min-w-0">
                <div className="text-white font-semibold truncate">
                  {displayName}
                </div>
                <div className="text-white/50 text-xs truncate">
                  {user.emailId || "Developer profile"}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                className="btn btn-sm bg-white/10 hover:bg-white/15 border border-white/10 text-white normal-case w-full"
                onClick={() => handleCopy(user.emailId || "")}
                disabled={!user.emailId}
                title="Copy your email"
              >
                Copy Email
              </button>
            </div>

            <div className="mt-6 text-xs text-white/60 leading-relaxed">
              Tip: update your photo and skills to improve match quality in the
              feed.
            </div>

            {/* Public profile card preview */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-[#0f0f0f]/60 overflow-hidden shadow-lg shadow-black/30 transition-transform duration-200 hover:scale-[1.01]">
              <div className="relative h-40">
                <img
                  src={avatarSrc}
                  alt="Profile preview"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = DEFAULT_AVATAR;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-white font-semibold truncate">
                    {displayName}
                  </div>
                  <div className="text-white/60 text-xs truncate">
                    {snapshot.gender ? snapshot.gender : "Developer"}
                    {snapshot.age ? ` • ${snapshot.age}` : ""}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="text-white/70 text-xs leading-relaxed line-clamp-3">
                  {snapshot.about || "Add a short bio to stand out in the feed."}
                </div>

                {snapshot.skills.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {snapshot.skills.slice(0, 6).map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-full text-[10px] bg-white/5 border border-white/10 text-white/80"
                        title={skill}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </aside>

          <section className="flex-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Profile settings
                </h2>
                <p className="text-white/50 text-sm mt-1">
                  Manage your public profile, skills, and security.
                </p>
              </div>
              <button
                className="btn bg-white text-black hover:bg-white/90 border-none normal-case"
                onClick={handleSave}
                disabled={!isDirty || isSaving}
                title={!isDirty ? "No changes to save" : "Save changes"}
              >
                {isSaving ? "Saving..." : "Save"}
              </button>
            </div>

            <div className="mt-6">
              <div role="tablist" className="tabs tabs-boxed bg-[#111]/40">
                <a
                  role="tab"
                  className={`tab ${
                    activeTab === "profile" ? "tab-active" : ""
                  }`}
                  onClick={() => setActiveTab("profile")}
                >
                  Profile
                </a>
                <a
                  role="tab"
                  className={`tab ${
                    activeTab === "skills" ? "tab-active" : ""
                  }`}
                  onClick={() => setActiveTab("skills")}
                >
                  Skills
                </a>
                <a
                  role="tab"
                  className={`tab ${
                    activeTab === "security" ? "tab-active" : ""
                  }`}
                  onClick={() => setActiveTab("security")}
                >
                  Security
                </a>
              </div>

              <div className="mt-6">
                {activeTab === "profile" && (
                  <div className="space-y-6">
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text text-white/70">
                          Profile picture URL
                        </span>
                      </label>
                      <div className="flex gap-3">
                        <input
                          type="text"
                          placeholder="https://example.com/photo.jpg"
                          className="input input-bordered w-full bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-white/30 focus:outline-none transition-colors"
                          value={photoUrl}
                          onChange={(e) => setPhotoUrl(e.target.value)}
                        />
                        <button
                          className="btn bg-white/10 hover:bg-white/15 border border-white/10 text-white normal-case"
                          onClick={() => handleCopy(photoUrl || "")}
                          disabled={!photoUrl}
                          title="Copy photo URL"
                        >
                          Copy
                        </button>
                      </div>
                      <div className="mt-3 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10 bg-white/5">
                          <img
                            src={avatarSrc}
                            alt="Preview"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = DEFAULT_AVATAR;
                            }}
                          />
                        </div>
                        <div className="text-xs text-white/50">
                          Preview updates instantly while you type. Save to apply
                          everywhere.
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text text-white/70">
                            First name
                          </span>
                        </label>
                        <input
                          type="text"
                          className="input input-bordered w-full bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-white/30 focus:outline-none transition-colors"
                          value={fName}
                          onChange={(e) => setFName(e.target.value)}
                        />
                      </div>
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text text-white/70">
                            Last name
                          </span>
                        </label>
                        <input
                          type="text"
                          className="input input-bordered w-full bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-white/30 focus:outline-none transition-colors"
                          value={lName}
                          onChange={(e) => setLName(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text text-white/70">Age</span>
                        </label>
                        <select
                          className="select select-bordered w-full bg-white/5 border-white/10 text-white focus:border-white/30 focus:outline-none transition-colors"
                          value={age}
                          onChange={(e) => setAge(Number(e.target.value))}
                        >
                          {Array.from({ length: 83 }, (_, i) => 18 + i).map(
                            (ageVal) => (
                              <option
                                key={ageVal}
                                value={ageVal}
                                className="bg-[#1a1a1a]"
                              >
                                {ageVal}
                              </option>
                            )
                          )}
                        </select>
                      </div>
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text text-white/70">
                            Gender
                          </span>
                        </label>
                        <select
                          className="select select-bordered w-full bg-white/5 border-white/10 text-white focus:border-white/30 focus:outline-none transition-colors"
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                        >
                          <option value="male" className="bg-[#1a1a1a]">
                            Male
                          </option>
                          <option value="female" className="bg-[#1a1a1a]">
                            Female
                          </option>
                          <option value="other" className="bg-[#1a1a1a]">
                            Other
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text text-white/70">About</span>
                      </label>
                      <textarea
                        className="textarea textarea-bordered h-32 w-full bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-white/30 focus:outline-none transition-colors"
                        placeholder="Tell us about yourself..."
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                      ></textarea>
                      <div className="mt-2 text-xs text-white/40">
                        Keep it short and specific. This shows on your card.
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "skills" && (
                  <div className="space-y-6">
                    <div className="text-white/60 text-sm">
                      Add skills to improve discovery. Click a tag to remove it.
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <button
                          type="button"
                          key={skill}
                          onClick={() => removeSkill(skill)}
                          className="px-3 py-1.5 bg-[#1A1A1A] rounded-full text-xs text-gray-200 border border-white/10 hover:border-white/20 hover:bg-[#222] transition-colors"
                          title="Remove skill"
                        >
                          {skill} <span className="text-white/50">x</span>
                        </button>
                      ))}
                      {skills.length === 0 && (
                        <div className="text-xs text-white/40">
                          No skills yet. Add a few to start matching.
                        </div>
                      )}
                    </div>

                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text text-white/70">
                          Add a skill
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Type a skill and press Enter or comma"
                        className="input input-bordered w-full bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-white/30 focus:outline-none transition-colors"
                        value={skillInput}
                        onChange={(e) => setSkillInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === ",") {
                            e.preventDefault();
                            addSkill(skillInput);
                            setSkillInput("");
                          }
                        }}
                      />
                      <div className="mt-2 text-xs text-white/40">
                        {skills.length}/20 skills, max 30 chars each
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "security" && (
                  <div className="space-y-6">
                    <div className="text-white/60 text-sm">
                      Change your password. You stay logged in after updating.
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      <input
                        type={showPw ? "text" : "password"}
                        placeholder="Current password"
                        className="input input-bordered w-full bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-white/30 focus:outline-none transition-colors"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                      />
                      <input
                        type={showPw ? "text" : "password"}
                        placeholder="New password"
                        className="input input-bordered w-full bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-white/30 focus:outline-none transition-colors"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                      <input
                        type={showPw ? "text" : "password"}
                        placeholder="Confirm new password"
                        className="input input-bordered w-full bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-white/30 focus:outline-none transition-colors"
                        value={confirmNewPassword}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                      />

                      <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 text-xs text-white/60 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-sm checkbox-primary"
                            checked={showPw}
                            onChange={(e) => setShowPw(e.target.checked)}
                          />
                          Show passwords
                        </label>
                        <button
                          className="btn bg-white/10 hover:bg-white/15 border border-white/10 text-white normal-case"
                          onClick={handleChangePassword}
                        >
                          Update password
                        </button>
                      </div>

                      {passwordError && (
                        <p className="text-red-400 text-sm">{passwordError}</p>
                      )}
                    </div>

                    <div className="collapse collapse-arrow bg-[#111]/40 border border-white/10 rounded-2xl">
                      <input type="checkbox" />
                      <div className="collapse-title text-white/80 font-medium">
                        Advanced
                      </div>
                      <div className="collapse-content text-white/60 text-sm">
                        More security controls can live here later (logout all
                        devices, 2FA, sessions).
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>

      {showToast && (
        <div className="toast toast-top toast-center z-50">
          <div
            className={`alert ${
              toast.kind === "error" ? "alert-error" : "alert-success"
            } bg-[#111]/90 text-white border border-white/10`}
          >
            <span>{toast.message}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
