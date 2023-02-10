import p from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={p.item}>
      <img src="https://avatars.mds.yandex.net/i?id=5b0c24ff8077203da244b8b5a6a2d08a5c5dc20c-7777855-images-thumbs&n=13"></img>
      {props.message}
      <like>Like </like> {props.likesCount}<br></br>
      <like>Dislike</like>
    </div>
  );
};

export default Post;
