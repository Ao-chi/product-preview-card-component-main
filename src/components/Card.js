import Image from "./Image";
import CardBody from "./CardBody";
import "../assets/sass/components/card.scss";

const cardData = {
    text: "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfume-Creator for the House of CHANEL.",
    price: "149.99",
    origPrice: "169.99",
    title: "Gabrielle Essence Eau De Parfum",
    image: require("../assets/images/image-product-mobile.jpg"),
    alt: "perfume",
};

const Card = () => {
    return (
        <div className="card">
            <Image />
            <CardBody tag={cardData.alt} title={cardData.title} text={cardData.text} price={cardData.price} origPrice={cardData.origPrice} />
        </div>
    );
};

export default Card;
