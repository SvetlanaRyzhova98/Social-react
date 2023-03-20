import p from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={p.item}>
      <img src={props.urlAvatar}></img>
      {props.message}
      <div className={p.like}> {props.likesCount }<span>❤️</span></div>
      <div className={p.like}> {props.dislikesCount }<span>👎</span></div>
      <div>⋮</div>
    </div>
  );
};

export default Post;
