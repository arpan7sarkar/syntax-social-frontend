import { useSelector } from "react-redux";
import EditProfile from "../components/EditProfile";

const Profile = () => {
  const user=useSelector((state)=>state.user);
  return (
    <div>
        <EditProfile user={user}/>
    </div>
  );
};

export default Profile;
