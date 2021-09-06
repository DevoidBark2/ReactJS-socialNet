import bk from './../../../img/header-bg.png'
import './Description.css'
const Description = () => {
    return (
      <div className="description">
        <img src={bk}></img>
        <div className="title">
          My Posts
        </div>
      </div>
    );
}

export default Description;