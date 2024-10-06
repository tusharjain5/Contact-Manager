import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Dashboard from './components/dashboard/Dashboard';
import 'animate.css';
import Addcontact from './components/contact/Addcontact';
import Contacts from './components/contacts/Contacts';
import Edituser from './components/contacts/Edituser';
import Pagenotfound from './components/pagenotfou/Pagenotfound';



function App() {
  return (
    <>
    <BrowserRouter>
<Header/>
<Routes>
  <Route path='/' element={<Dashboard/>}/>
  <Route path='/add-contact' element={<Addcontact/>}/>
  <Route path='/contacts' element={<Contacts/>}/>
  <Route path='/edit-user/:id' element={<Edituser/>}/>
  <Route path='*' element={<Pagenotfound/>}/>

  </Routes>
<Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
