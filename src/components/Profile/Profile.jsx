import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/Post/ProfileInfo/ProfileInfo";
import p from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postData={props.postData} addPost={props.addPost} newPostText={props.newPostText}
      updateNewPostText={props.updateNewPostText}/>
    </div>
  );
};

export default Profile;
