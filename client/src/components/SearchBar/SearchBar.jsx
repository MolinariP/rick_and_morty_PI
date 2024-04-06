import { useState } from "react";
import styles from './SearchBar.module.css';
let { div, input, styleButton, styleRandomButton } = styles;

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState('');

   const handleInputChange = (e) => {
      setId(e.target.value);
   }

   const handleAddRandom = () => {
      const randomNumber = Math.floor(Math.random() * 826) + 1;
      console.log(randomNumber)
      onSearch(randomNumber);
   }

   return (
      <div className={div}>
         <input className={input} type='search' value={id} onChange={handleInputChange} /> 
         <button className={styleButton} onClick={()=>onSearch(id)}>Agregar</button>
         <button className={styleRandomButton} onClick={handleAddRandom}>Random</button>
      </div>
   );
};
