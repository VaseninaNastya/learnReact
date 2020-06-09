import React from 'react';
import { connect } from 'react-redux'
import LoginPage from "./pages/login";
import s from "./App.module.css"
import HomePage from "./pages/home";
import { Spin, Layout, Menu } from 'antd';
import TimerPage from "./pages/Timer";
import TestContext from '../src/context/testContext';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import FirebaseContext, { withFirebase } from '../src/context/firebaseContext';
import { PrivateRoute } from './utils/privateRoute';
import CurrentCard from './pages/CurrentCard';
import { bindActionCreators } from 'redux';
import {addUserAction} from './actions/userActions'


const { Header, Content } = Layout;

class App extends React.Component {

  componentDidMount() {
    const { auth } = this.context
    const { addUser } = this.props
    const { setUserUid, setUserEmail } = this.context

    auth.onAuthStateChanged((user) => {
      
      if (user) {
        
        setUserUid(user.uid)
        setUserEmail(user.email)
        localStorage.setItem('user', JSON.stringify(user.uid))
        addUser(user)



      } else {
        setUserUid(null)
        localStorage.removeItem('user')

      }
    })
  }
  render() {

    

const {userUid} = this.props;
console.log(userUid)

    if (userUid===null) {
      return (
        <div className={s.loader_wrap}>
          <Spin size="large" />
        </div>
      );
    } else {
      return (
        <>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route render={(props) => {
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
                      <Redirect to='/' />
                    </Switch>
                  </Content>
                </Layout>
              )
            }} />
          </Switch>

        </>
      )
    }
  }
}
App.contextType = FirebaseContext;

const mapStateToProps = (state) =>{
  return{
    userUid: state.user.userUid ,
    userEmail: state.user.userEmail
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addUser: addUserAction,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


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