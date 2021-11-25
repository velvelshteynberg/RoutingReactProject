import classes from './Card.module.css';

function Card(props) {
    return <div className={classes.card}>{props.children}</div>; // props.children is what you get passed in as the children of the tag that is passed from meetUPItem
};

export default Card;