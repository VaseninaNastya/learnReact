import React from 'react';
import { fire } from "./servises/firebase";
import LoginPage from "./pages/login";
import s from "./App.module.css"
import HomePage from "./pages/home";
import { Spin, Layout, Menu} from 'antd';
import TimerPage from "./pages/Timer";
import TestContext from '../src/context/testContext';
import { BrowserRouter, Route, Link, Switch, Redirect  } from 'react-router-dom';
import FirebaseContext, { withFirebase } from '../src/context/firebaseContext';
import { PrivateRoute } from './utils/privateRoute';
import CurrentCard from './pages/CurrentCard';




const { Header, Content } = Layout;

class App extends React.Component {
  state = {
    user: null
  }
  componentDidMount() {
    const { auth } = this.props.firebase



    console.log('фаербейс в app', this.props);
    const { setUserUid, setUserEmail } = this.props.firebase
    auth.onAuthStateChanged((user) => {
      console.log('юзер в апп', user);

      if (user) {
        setUserUid(user.uid)
        setUserEmail(user.email)
        localStorage.setItem('user', JSON.stringify(user.uid))
        this.setState({
          user,
        })


      } else {
        setUserUid(null)
        localStorage.removeItem('user')
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
        <>
          <Route path="/login" component={LoginPage} />
          <Route render={(props) => {
            console.log('пропсы в рендере', props);
            const { history: { push } } = props;
            return (
              <Layout>
                <Header>
                  <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="1">
                      <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <Link to="/about">About</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                      <Link onClick={() => push("/contact")}>Contact</Link>
                    </Menu.Item>
                  </Menu>
                </Header>
                <Content>
                  <Switch>
                    <PrivateRoute path="/" exact component={HomePage} />
                    <PrivateRoute path="/home/:id?/:isDone" exact component={HomePage} />                    
                    <PrivateRoute path="/about" component={TimerPage} />
                    <PrivateRoute path="/contact" component={TimerPage} />
                    <PrivateRoute path="/word/:id?" component={CurrentCard} />
                    <Redirect to='/'/>                  </Switch>
                </Content>
              </Layout>
            )
          }} />
        </>
      )
    }
  }
}
App.contextType = FirebaseContext;
export default withFirebase(App);


/*<Route path='/' exact component={()=><HomePage/>} />*/

/*

<BrowserRouter>
<Route path="/home" component={HomePage}/>
        </BrowserRouter>
*/


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