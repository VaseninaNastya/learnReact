import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import HeaderBlock from "./components/HeaderBlock"

//const el =React.createElement("h1", null, "Hello World, React.js!");

const AppList = () => {
  const items = ["Item 1", "Item 2", "Item3", "Item4"];
  const firstItem = <li>Item0</li>
  const isAuth = false;

  return (

    <ul>
      { isAuth? firstItem: null}
          { items.map(item => <li>{item}</li>)}
      <li>
        {items[0]}
      </li>
      <li>
        {items[1]}
      </li>
    </ul>
  )
};
const AppInput = () => {
  const placeholder = "Type text...";
  return (
    <label htmlFor="search">
      <input id="search" placeholder={placeholder}/>
    </label>
  )
}
const AppHeader = () => {

  return(
    <h1 className="header" >Hello World!!!</h1>
  )
}
const App = () => {
  return (
    <>
      <HeaderBlock />
      <AppHeader />
      <AppInput />
      <AppList />
    </>
  );

}

ReactDOM.render(<App />, document.getElementById("root"));

