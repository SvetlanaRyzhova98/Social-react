import Friend from "./Friend/Friend";
import f from "./Friends.module.css";



const Friends = (props) => {

    let frindsElements = props.friends.map((fr) => 
      <Friend url={fr.url} name={fr.name} lastName={fr.lastName} />
    );
  
    return <div className={f.friendsBox}>{frindsElements} </div>;
  };


export default Friends;
