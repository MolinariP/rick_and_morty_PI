import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from '../Detail/Detail.module.css';

const {div, styleName, styleImage, dataDiv, imageDiv, styleData} = styles;

export default function Detail() {
    const [character, setCharacter] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
           ({ data }) => {
              if (data.name) {
                 setCharacter(data);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           }
        );
        return setCharacter({});
     }, [id]);

    return (
        <div className={div}>
            <div className={dataDiv}>
                <h2 className={styleName}>{character.name}</h2>
                <h2 className={styleData}>STATUS: {character.status}</h2>
                <h2 className={styleData}>SPECIE: {character.species}</h2>
                <h2 className={styleData}>GENDER: {character.gender}</h2>
                <h2 className={styleData}>ORIGIN: {character.origin?.name}</h2>
            </div>
            <div className={imageDiv}>
                <img className={styleImage} src={character.image} alt='' />
            </div>
        </div>
    );
};