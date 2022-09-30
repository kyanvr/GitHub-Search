import './Search.css';

const Search = ({onClick, active}) => {
    return (
        <button className={`btnSearch shadow-drop-center ${active}`} onClick={onClick}>SEARCH</button>
    )
}

export default Search;