import './Header.css';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <header className='header'>
            <FontAwesomeIcon icon={faGithubSquare} className='github' />
            <h1>Github Search</h1>
        </header>
        
    )
};

export default Header;
