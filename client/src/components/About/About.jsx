import styles from './About.module.css';

const {div, title, text} = styles;

export default function About() {
    return (
        <div className={div}>
            <h1 className={title}>ABOUT</h1>
            <h3 className={text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati modi repellendus a debitis ratione, quo aut corporis eaque pariatur accusamus. Eaque magnam quisquam quod id itaque necessitatibus dicta deserunt nisi!</h3>
        </div>
    )
};