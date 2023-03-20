import p from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={p.user__bg}></div>
      <div className={p.user__card}>
        <div className={p.user__avatar}></div>
        <div className={p.user__info}>
          <div className="user__name">Lana Ry</div>
          <div className="user__data">Date of Birth: </div>
          <div className="user__location">City: </div>
          <div className="user__education">Education: </div>
          <div className="user__site">Site: </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
