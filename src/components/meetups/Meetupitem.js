import classes from "./Meetupitem.module.css";
import Card from "../UI/Card";

function MeetUpItem(props) {
    return (
        <Card>
            <li className={classes.item}>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button>To Favorites</button>
                </div>
            </li>
        </Card>
    );
}

export default MeetUpItem;
