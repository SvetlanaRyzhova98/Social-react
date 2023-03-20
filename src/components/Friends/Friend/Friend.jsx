import f from "./Friend.module.css";

const Friend = (props) => {
    return (
      <div className={f.friendBox}>
        <img className={f.avatar} src={props.url} /> 
        <div>
          {props.name} {props.lastName}
        </div>
      </div>
    );
  };


  export default Friend;