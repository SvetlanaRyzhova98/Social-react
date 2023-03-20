import { NavLink } from "react-router-dom";
import d from "./../Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div>
      <div >
        <NavLink className={d.dialog} to={path}> 
        <img className={d.avatar} src={props.url}/>{props.name}</NavLink>
      </div>
    </div>
  );
}; 
 
export default DialogItem;
