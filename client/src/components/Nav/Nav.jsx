import React from "react";
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Nav.module.css';
import { useDispatch } from 'react-redux';
import { filterCards, orderCards } from '../redux/actions';

let {div, link, logoutButton, select1, select2 } = styles;

export default function Nav({ onSearch, logout }) {
    const dispatch = useDispatch();

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value));
    };

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value));
    };

    return (
        <div className={div}>
          <Link className={link} to='/home'>Home</Link>
          <Link className={link} to='/about'>About</Link>
          <Link className={link} to='/favorites'>Favorites</Link>
          <button className={logoutButton} onClick={logout}>Log Out</button>
          <SearchBar onSearch={onSearch}/>
 
          <select className={select1} name="order" onChange={handleOrder}>
             <option value="A">Ascendente</option>
             <option value="D">Descendente</option>
          </select>
          <select className={select2} name="gender" onChange={handleFilter}>
             <option value="All">All</option>
             <option value="Male">Male</option>
             <option value="Female">Female</option>
             <option value="Genderless">Genderless</option>
             <option value="unknown">Unknown</option>
          </select>
        </div>
     );
};