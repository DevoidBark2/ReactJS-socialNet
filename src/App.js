import { Route } from 'react-router-dom';
import './App.css';
import Main from './components/Content/Main/Main';
import Dialogs from './components/Content/Dialogs/Dialogs';
import Settings from './components/Content/Settings/Settings';
import Header from './components/Header/Header';
import Navbar from './components/Content/Navbar/Navbar';
import Friends from './components/Friends/Friends';
import { AddPost } from './redux/state';

const App = (props) => {
  return (

    <div className="Social">
      <div className="App">
        <Header />
        <div className="content">
          <Navbar />
          <Route path="/Profile"
            render={
              () => <Main PostData={props.state.MainPage.PostData}
                AddPost={props.AddPost}
                newPostText={props.state.MainPage.newPostText}
                updateNewPostText={props.updateNewPostText}/>
            } />
          <Route path="/Dialogs"
            render={
              () => <Dialogs NameData={props.state.DialogsPage.NameData} MessageData={props.state.DialogsPage.MessageData} />
            } />
          <Route path="/Settings"
            render={
              () => <Settings />
            } />
          <Route path="/Friends"
            render={
              () => <Friends FriendName={props.state.FriendsPage.FriendName} />
            } />
        </div>
      </div>
    </div>

  );
}
export default App;
