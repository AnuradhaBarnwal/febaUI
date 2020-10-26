import React from "react";
// import classes from "Cards.module.css";
import classes from "./Card.module.css";
import { Button } from 'reactstrap';

const Card = (props) => {
    return (
        <div className={classes.CardContainer}>
            {/* <div className={classes.submit}>
                    <Button className={classes.appoint} outline color="danger" onClick={props.click}>For Appointment</Button>
                </div> */}

            <div className={classes.Heart}>
                <svg className={classes.HeartIcon} fill="grey" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
            </div>

            <div className={classes.CardImg} onClick={props.click}>
                <img src={props.imgLoc} alt={props.imgAlt} />
            </div>
            <div className="card-content">
                <div className="tag">
                    <span className={classes.TagName}>{props.vendor}</span>
                    <span className={classes.Places}>{props.place}</span>
                    <span className={classes.Rating}><svg className={classes.RatingIcon} focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="#be2364" role="presentation"><path transform="scale(1.33, 1.33)" d="M9 11.3l2.46 1.79c.39.29.92-.1.77-.56l-.94-2.89 2.43-1.73c.4-.28.2-.91-.29-.91h-2.98l-.97-3.02c-.15-.46-.8-.46-.95 0L7.55 7H4.57c-.49 0-.69.63-.29.91l2.43 1.73-.94 2.89c-.15.46.38.84.77.56L9 11.3z"></path></svg>{props.rating}</span>
                </div>
                <div className={classes.CardName}>
                    <span>{props.cardName}</span>
                </div>
                <div className="price">
                    <span><b>₹{props.price}</b></span> <span className={classes.MakeupName}> / {props.makeupType}</span>
                </div>
            </div>
        </div>

    );
}

export default Card;