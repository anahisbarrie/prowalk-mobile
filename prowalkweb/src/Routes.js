import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/homePage';
import Login from './containers/loginPage';
import WalkerProfile from './containers/walkerProfilePage';
import Navbar from './componets/util/navbar';
import FinishPage from './containers/finishPage'
// import DuringWalk from './containers/DuringWalkPage';




function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/home' component={Home} />
                <Route path='/walker' component={WalkerProfile} />
                <Route exact path='/finish' component={FinishPage} />
            </Switch>  
    </Router >
 );
}

export default AppRouter;