import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Home from '../shared/Home';
import About from '../shared/About/About';
import Shop from '../shared/Shop/Cars';
import Contact from '../shared/Contact/index';
import Upload from '../shared/Upload';
import Nav from './Nav';
import './App.css';
// import Loginscreen from '../Login/Loginscreen';
// injectTapEventPlugin();

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             loginPage: [],
//             uploadScreen: []
//         }
//     }
//     componentWillMount() {
//         let loginPage = [];
//         loginPage.push(
//             <Loginscreen parentContext={this} />
//         );
//         this.setState({
//             loginPage: loginPage
//         })
//     }
//     render() {
//         return (
//             <div className="App">
//                 {this.state.loginPage}
//                 {this.state.uploadScreen}
//                 <Nav />
//                 <Switch>
//                     <Route exact path='/' component={Home} />
//                     <Route exact path='/about' component={About} />
//                     <Route exact path='/cars' component={Shop} />
//                     <Route path='/contact' component={Contact} />
//                     <Route path='/upload' component={Upload} />
//                     {/* <Route path='/login' component={Login} /> */}
//                 </Switch>
//             </div>
//         )
//     }
// }
// export default App;

function App(props) {
    return (
        <div>
            <Nav />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/cars' component={Shop} />
                <Route path='/contact' component={Contact} />
                <Route path='/upload' component={Upload} />
                {/* <Route path='/login' component={Login} /> */}
            </Switch>
        </div>
    )
}

export default App
