import { NavLink } from "react-router-dom";
import d from "./Dialogs.module.css"

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id; 
    return (
        <div>
             <div className={d.dialog + ' ' + d.active}>
                <NavLink to={path} >{props.name}</NavLink>
            </div>
        </div>
    )
}
const Message = (props) => {
    <div className={d.message}></div>
}

const Dialogs = (props) => {
return (
    <div className={d.dialogs}>
        <div className={d.dialogsItems
        }>
            <DialogItem name='Evgeny' id='1'/>
            <DialogItem name='Dimych' id='2'/>
            <DialogItem name='Sveta' id='3'/>
            <DialogItem name='Rimma' id='4'/>
            <DialogItem name='Lika' id='5'/>
            
        </div>
        <div className={d.messages}>
            <div className={d.message}>Да</div>
            <div className={d.message}>как ты?</div>
            <div className={d.message}>конечно, он по-другому и не стал бы</div>
            <div className={d.message}>Завтра давай</div>
        </div>
    </div>
)

}
export default Dialogs;