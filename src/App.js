import React from 'react';
import { fire } from "./servises/firebase";
import LoginPage from "./pages/login";
import s from "./App.module.css"
import HomePage from "./pages/home";
import { Spin } from 'antd';
import TimerPage from "./pages/Timer";
import TestContext from '../src/context/testContext';

import FirebaseContext from '../src/context/firebaseContext';


class App extends React.Component {
  state = {
    user: null
  }
  componentDidMount() {

    console.log('context', this.context);
    const { auth } = this.context
const{    setUserUid}=this.context
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserUid(user.uid)
        this.setState({
          user,
        })
      } else {
        setUserUid(null)
        this.setState({
          user: false,
        })
      }
    })
  }
  render() {
    
    console.log("юзер", this.state.user);
    
    if (this.state.user === null) {
      return (
        <div className={s.loader_wrap}>
          <Spin size="large" />
        </div>
      );
    } else {
      return (
        <>{
          this.state.user ?
            <TestContext.Provider value={{ uid: this.state.user.uid }}>
              <HomePage user={this.state.user} />
            </TestContext.Provider>
            : <LoginPage />
        }
        </>
      );
    }
  }
}
App.contextType = FirebaseContext;
export default App;








/* Для вызова часиков
class App extends React.Component {
  state = {
    user: null
  }
  componentDidMount() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user,
        })
      } else {
        this.setState({
          user: false,
        })
      }
    })
  }
  render() {

      return (
        <>
<TimerPage/>

        </>
      );

  }
}*/