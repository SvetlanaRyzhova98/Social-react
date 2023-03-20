import m from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from 'react'   

const MyPosts = (props) => {
 
  let postsElements = props.postData.map( p =>  <Post key={p.id} message={p.message} likesCount={p.likesCount} urlAvatar={p.url} dislikesCount={p.dislikesCount}/>)
  
  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
    
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className="user__posts">
      <div className={m.fild__box}>
        <textarea onChange={onPostChange} ref={newPostElement}  value={props.newPostText} className={m.fild}/>
        <button onClick={addPost} className={m.button}>→</button>
      </div>
      <div className={m.posts}>
       {postsElements}
      </div>
    </div>
  );
};
  
export default MyPosts;
