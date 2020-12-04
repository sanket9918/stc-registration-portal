import React from "react";
import "./App.css";
import Error from "./components/error/error.component";
import Navbar1 from "./components/navbar.component";
import Hero from './components/hero'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Finish from "./components/end_exam.component";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
          <div>
            <Navbar1 />
            <Switch>
             
              <Route
                path="/"
                exact
                render={(props) => <Hero {...props} />}
              />
              <Route
                path="/finish"
                exact                
                render={(props) => <Finish {...props} />}
              />
              
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
