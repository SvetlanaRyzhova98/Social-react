import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import { addPost } from "./redux/state";

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs/*" element={<Dialogs dialogs={props.state.messagesPage.dialogs} messages={props.state.messagesPage.messages}/>} />
            <Route path="/profile" element={<Profile 
            postData={props.state.profilePage.postData} 
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}
            newPostText={props.state.profilePage.newPostText}/>
            } />
            <Route path="/friends" element={<Friends friends={props.state.friendsPage.friends}/>} />
            <Route path="/news" element={<News/>} />
            <Route path="/music" element={<Music/>} />
            <Route path="/settings" element={<Settings/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
