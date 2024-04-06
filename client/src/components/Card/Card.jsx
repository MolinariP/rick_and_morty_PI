import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../redux/actions';
import styles from './Card.module.css';

const {div, styleName, styleImage, styleButton, data} = styles;


export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   const [isFav, setIsFav] = useState(false);

   const dispatch = useDispatch();
   const myFavorites = useSelector((state) => state.myFavorites);

   const myChar = {
      name: name,
      gender: gender,
      species: species,
      id: id,
      image: image      
   };

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         dispatch(removeFav(id))
      } else {
         setIsFav(true);
         dispatch(addFav(myChar))
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if(fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);



   return (
      <div className={div}>
         <button className={styleButton} onClick={()=> (onClose(id))}>X</button>
         <Link to={`/detail/${id}`}>
            <h2 className={styleName}>{name}</h2>
         </Link>
         {/* <h2 className={data}>{status}</h2> */}
         <h2 className={data}>{species} - {gender}</h2>
         {/* <h2 className={data}>{species}</h2>
         <h2 className={data}>{gender}</h2>
         <h2 className={data}>{origin}</h2> */}
         <img className={styleImage} src={image} alt='' />
         {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )}
      </div>
   );
}

