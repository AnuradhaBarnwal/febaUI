import React from "react";
import classes from "./Cards.module.css";
import Card from "./Card/Card";
import image1 from '../../assets/img/img1.jpg'
import image2 from '../../assets/img/img2.jpg'
import image3 from '../../assets/img/img3.jpg'
import image4 from '../../assets/img/img4.jpg'

const Cards = (props) => {

    const cardDetails = {
        card1: {
            imgLoc: image1,
            imgAlt: "image1",
            vendor: "SUPER VENDOR",
            place: "Jaipur",
            rating: "4.8",
            cardName: "JSSmakeuovers",
            price: "15999",
            makeupType: "Bridal makeup"
        },
        card2: {
            imgLoc: image2,
            imgAlt: "image2",
            vendor: "SUPER VENDOR",
            place: "Delhi",
            rating: "4.8",
            cardName: "jfjdvjdvnvred",
            price: "24999",
            makeupType: "Bridal makeup"
        },
        card3: {
            imgLoc: image3,
            imgAlt: "image3",
            vendor: "SUPER VENDOR",
            place: "Delhi",
            rating: "4.8",
            cardName: "jfjdvjdvnvred",
            price: "24999",
            makeupType: "Bridal makeup"
        },
        card4: {
            imgLoc: image4,
            imgAlt: "image4",
            vendor: "SUPER VENDOR",
            place: "Delhi",
            rating: "4.8",
            cardName: "jfjdvjdvnvred",
            price: "24999",
            makeupType: "Bridal makeup"
        },
        card5: {
            imgLoc: image1,
            imgAlt: "image1",
            vendor: "SUPER VENDOR",
            place: "Jaipur",
            rating: "4.8",
            cardName: "JSSmakeuovers",
            price: "15999",
            makeupType: "Bridal makeup"
        },
        card6: {
            imgLoc: image2,
            imgAlt: "image2",
            vendor: "SUPER VENDOR",
            place: "Delhi",
            rating: "4.8",
            cardName: "jfjdvjdvnvred",
            price: "24999",
            makeupType: "Bridal makeup"
        },
        card7: {
            imgLoc: image3,
            imgAlt: "image3",
            vendor: "SUPER VENDOR",
            place: "Delhi",
            rating: "4.8",
            cardName: "jfjdvjdvnvred",
            price: "24999",
            makeupType: "Bridal makeup"
        },
        card8: {
            imgLoc: image4,
            imgAlt: "image4",
            vendor: "SUPER VENDOR",
            place: "Delhi",
            rating: "4.8",
            cardName: "jfjdvjdvnvred",
            price: "24999",
            makeupType: "Bridal makeup"
        },
        card9: {
            imgLoc: image4,
            imgAlt: "image4",
            vendor: "SUPER VENDOR",
            place: "Delhi",
            rating: "4.8",
            cardName: "jfjdvjdvnvred",
            price: "24999",
            makeupType: "Bridal makeup"
        }
    }

    const cardArray = [];
    for (let card in cardDetails) {
        cardArray.push(cardDetails[card]);
    }

    let card = cardArray.map(card => (
        <Card
            imgLoc={card.imgLoc}
            imgAlt={card.imgAlt}
            vendor={card.vendor}
            place={card.place}
            rating={card.rating}
            cardName={card.cardName}
            price={card.price}
            makeupType={card.makeupType}
            click={props.click}
        />
    ));

    return (
        <div className={classes.Cards}>
            {card}
        </div>

    );
}

export default Cards;