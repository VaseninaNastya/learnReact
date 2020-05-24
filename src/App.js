import React from 'react';
import { fire } from "./servises/firebase";
import LoginPage from "./pages/login";
import s from "./App.module.css"
import HomePage from "./pages/home";
import { Spin } from 'antd';

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
    if (this.state.user === null) {
      return (
        <div className={s.loader_wrap}>
          <Spin size="large" />
        </div>
      );


    } else {
      return (
        <>{
          this.state.user ? <HomePage user={this.state.user}/> : <LoginPage />
        }


        </>
      );
    }

  }


}

export default App;
      /*
import HomePage from "./pages/home"
<HomePage/>  */