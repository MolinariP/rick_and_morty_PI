import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import styles from './Favorites.module.css';

const {divBack, divVacio, divFavs} = styles;

export default function Favorites() {
    const myFavorites = useSelector((state) => state.myFavorites);

    return(
        <div className={divBack}>
            <div className={divVacio}>
            </div>
            <div className={divFavs}>
                {myFavorites?.map((fav) => (
                    <Card
                        id={fav.id}
                        name={fav.name}
                        key={fav.id}
                        species={fav.species}
                        gender={fav.gender}
                        image={fav.image}
                        // onClose={handleClose}
                    />
                ))}
            </div>
        </div>
    );
};