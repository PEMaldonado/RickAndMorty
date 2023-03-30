import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import { useState } from 'react';
import axios from 'axios';
import {Routes,Route} from "react-router-dom"
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import Favorites from './components/Favorites';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function App() {
   const location = useLocation()
   const EMAIL = "pablo@gmail.com"
   const PASSWORD = "contra12"
   const navigate = useNavigate();

   const [access,setAccess] = useState(false)
   const [characters,setCharacters] = useState([])

   

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function onClose(id) {
      const filtered = characters.filter(character => parseInt(id) !== character.id)
      setCharacters(
         filtered
      )
   }

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         }
      })
      .catch((error) => {
         console.log(error);
         window.alert('¡No hay personajes con este ID!');
      });
   }
   
   const login = (userdata) => {
      if (userdata.password ===PASSWORD && userdata.email ===EMAIL){
         setAccess(true)
         navigate("/home")
      } else{
         alert("Credenciales incorrectas")
      }
   }
   return (
      <div className='App'>

            {location.pathname!=="/" && <Nav onSearch={onSearch} />}

         <Routes>
            <Route path = "/" element = {<Form login={login} />} />

            <Route path ="/home" element ={<Cards characters={characters} onClose={onClose} />} />

            <Route path ="/about" element ={<About />} />

            <Route path ="/detail/:id" element={<Detail />} />
            
            <Route path ="favorites" element={<Favorites />} />
         </Routes>
         
      </div>
   );
}

export default App;
