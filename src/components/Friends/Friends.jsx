import Friend from './Friend/Friend';
import './Friends.css'

const Friends = (props) => {

    let FriendNameElemenets = props.FriendName.map(el => <Friend name={el.name} />);
    return (
        <div className="friends">
            <div className="first-block">
                <h1 className="friend-title">My Friends</h1>
                {FriendNameElemenets}
            </div>
            {/* <div className="second-block">
                fdsfdfs
            </div> */}
        </div>
    );
}
export default Friends;