import React from 'react'
import Description from './Desciption/Description'
import './Main.css'
import Post from './MyPosts/Post/Post'


const Main = (props) => {

  let NewPostElement = React.createRef();
  let Postelements = props.PostData.map(post => <Post message={post.message} like={post.like} />);

  let addPost = () => {
    props.AddPost()
    // props.updateNewPostText('');
  }
  let onPostChange = () => {
    let text = NewPostElement.current.value;
    props.updateNewPostText(text);
  }
  return (
    <main className="main">
      <Description />
      <div className="add-post">
        <textarea onChange={onPostChange} ref={NewPostElement} value={props.newPostText} />
        <button onClick={addPost} >Add Post</button>
      </div>
      {Postelements}
    </main>
  );
}
export default Main;