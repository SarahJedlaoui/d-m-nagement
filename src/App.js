import React from 'react';
import Navbar from './components/Navbar/Navbar'; 
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Administratif from './components/SignIn/Administratif';
import SignUp from './components/SignUp/SignUp';
import Form from './components/Header/form';
import {AuthProvider} from './contexts/AuthContext';
import Appl from './components/appl';
import ForgotPassword from './components/SignIn/ForgotPassword';
import { Provider } from 'react-redux';
import { useRoutes ,Routes} from 'react-router-dom';
import './components/admin/src/fake-db';
import { MatxTheme } from './components/admin/src/app/components';
//import { AuthProvider } from './components/admin/src/app/contexts/JWTAuthContext';
import { SettingsProvider } from './components/admin/src/app/contexts/SettingsContext';
import { Store } from './components/admin/src/app/redux/Store';
import routes from './components/admin/src/app/routes';



 
const App = () => {
 
  return (
    <>
      <Router>
        <Navbar />
       <Routes>
          <Route path='/' exact element={<Home/>} /> {/* every time we go to / it open upp the home element */ }
          <Route path='/administratif' element={<Administratif/>} />
          <Route path='/forgotpassword' element={<ForgotPassword/>} />
          <Route path='/form' element={<Form/>} />
          <Route path='/appl' element={<Appl/>} />
          <Route path='/sign-up' element={<SignUp/>} /> 
          </Routes>
      </Router>
    </>
  );
}

export default App;