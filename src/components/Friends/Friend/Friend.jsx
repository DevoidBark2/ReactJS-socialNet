import './Friend.css'
import photo from './../../img/photo.jpg'
import { NavLink } from 'react-router-dom';
const Friend = (props)=>{
    
    

    return(
        <div className="friend">   
            <div className="friend-account">
            <a href="#" className="friend-photo"><img src={photo}></img></a>
            <a href="#" className="friend-name">{props.name}</a>
            </div>
            <NavLink to="/Dialogs" className="friend-mess">Write message</NavLink>
            <a href="#" className="friend-delete">Delete friend</a>
        </div>
    );
}
export default Friend;