import Close from "../Button/Close/Close";
import "./Card.css";

const Card = ({ children, onClose }) => {
    return (
        <div className="detail">
        <Close className="detail__btn-close" onClick={onClose}>
            X
        </Close>
        {children}
        </div>
    );
};

export default Card;
