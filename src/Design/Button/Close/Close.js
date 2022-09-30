import './Close.css';

const Close = ({className, onClick, children}) => {
    return (
        <button className={className} onClick={onClick}>{children}</button>
    )
}

export default Close;
