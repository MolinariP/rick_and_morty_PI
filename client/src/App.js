import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx';
import { useDispatch } from 'react-redux';
import { addChar } from './components/redux/actions.js';

function App() {
   const dispatch = useDispatch();

   const [ access, setAccess ] = useState(true);  //
   // const [ access, setAccess ] = useState(false);  //

   const location = useLocation();
   const navigate = useNavigate();

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   async function login(userData) {
      try{
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         let response = await axios(URL + `?email=${email}&password=${password}`);
         let { access } = response.data;
         setAccess(access);
      } catch (error) {
         console.log(error);
      }
   };

   const onSearch = async (id) => {
      try {
         let response = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
         const data = response.data; 
         if (response.data.name) {
            setCharacters((oldChars) => [...oldChars, response.data]);
            dispatch(addChar(response.data)); 
         } else {
            window.alert(`¡No hay personajes con el ID ${id}!`);
         }
      } catch (error){
         console.log(error.message);
      }
   };

   
   const logout = ()=>{
      setAccess(false);

   };

   return (
      <div className='App'>
         <div>
            {
            location.pathname !== '/' ?
            <Nav onSearch={onSearch} logout={logout} /> :
            undefined
            }
            
         </div>
         <div>
            <Routes>
               <Route path='/' element={<Form login={login}/>} />
               <Route path='/home' element={<Cards />} />
               <Route path='/about'element={<About />} />
               <Route path='/Detail/:id' element={<Detail />} />
               <Route path='/favorites' element={<Favorites />} />
            </Routes>
         </div>
      </div>
   );
};

export default App;
