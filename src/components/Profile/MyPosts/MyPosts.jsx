import m from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My post
      <div>
        <textarea className={m.fild}></textarea>
        <button className={m.button}>Add post</button>
      </div>
      <div className={m.posts}>
        <Post message='Много букфф' likesCount='1'/>
        <Post message='Меньше букфф' likesCount='8'/>
      </div>
    </div>
  );
};
  
export default MyPosts;
