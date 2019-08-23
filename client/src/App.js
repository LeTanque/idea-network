import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Nav from './components/Home/Nav.jsx';
import Home from './components/Home/Home.jsx';
import Users from './components/Users/Users.jsx';
import Posts from './components/Posts/Posts.jsx';



const App = () => {
  return (
    <BrowserRouter>
      <section className="App">


        <header className="home-header" >
          <Nav />
        </header>



        <Route
          exact
          path={'/'}
          render={() => (
            <Home />
          )}
        />
        <Route
          path={'/users'}
          render={() => (
            <Users />
          )}
        />
        <Route
          path={'/posts'}
          render={() => (
            <Posts />
          )}
        />
      
      </section>
    </BrowserRouter>
  );
}

export default App;


