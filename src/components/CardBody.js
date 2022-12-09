import "../assets/sass/components/card.scss";
import Button from "./Button";

const CardBody = (props) => {
    console.log(props.tag);
    return (
        <div className="card-body">
            <div className="tag">
                <p>{props.tag}</p>
            </div>
            <div className="card-title">
                <h1>{props.title}</h1>
            </div>
            <div className="card-desc">
                <p>{props.text}</p>
            </div>
            <div className="item-price">
                <p className="price">${props.price}</p>
                <span className="orig-price">${props.origPrice}</span>
            </div>
            <Button />
        </div>
    );
};

export default CardBody;
