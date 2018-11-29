import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/CustomNavbar';
import Footer from './components/Footer';
import Calendar from './components/pages/Calendar';
import Home from './components/pages/Home';
import Users from './components/pages/Users';

const style = {
    position:'relative',
    margin: "50px auto"

}

class App extends Component {
  render() {
    return (
        <div>
            <Router>
                <div>
                    <Navbar />
                    <Route exact path="/" component={Home} />
                    <Route path="/Calendar" component={Calendar} />
                    <Route path="/users" component={Users} />

                </div>

            </Router>

            <Calendar style={style} width ="302px" />



            <Footer>

            </Footer>
        </div>
    );
  }
}

export default App;
