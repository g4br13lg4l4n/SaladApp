/** @format */

import {AppRegistry} from 'react-native'
//import App from './App';
import {name as appName} from './app.json'
import Login from './Components/Login/Login'
import Welcome from './Components/Welcome/welcome'


AppRegistry.registerComponent(appName, () => Welcome);
