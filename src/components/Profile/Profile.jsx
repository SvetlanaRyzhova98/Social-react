import MyPosts from './MyPosts/MyPosts';
import './Profile.css'

const Profile = () => {
    return (
        <div className="user">
        <div className="user__bg"></div>
        <div className="user__card">
          <div className="user__avatar"></div>
          <div className="user__info">
            <div className="user__name">Lana Ry</div>
            <div className="user__desc">
              <div className="user__data">Date of Birth: </div>
              <div className="user__location">City: </div>
              <div className="user__education">Education: </div>
              <div className="user__site">Site: </div>
            </div>
          </div>
        </div>
        <div className="user__posts">
          <MyPosts />
        </div>
      </div>
    );
  };
   
  
  export default Profile;