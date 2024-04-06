import React from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.css';

let {divBack, divVacio, divCards} = styles;

export default function Cards({ characters, onClose }) {

   return (
   <div className={divBack}>
      <div className={divVacio}>

      </div>
      <div className={divCards}>

         {
            characters?.map(({id, name, species, gender, image}) => <Card
               key={id}
               id={id}
               name={name}
               species={species}
               gender={gender}
               image={image}
               onClose={onClose}
            />
         )}
      </div>;
   </div>
   )

};
