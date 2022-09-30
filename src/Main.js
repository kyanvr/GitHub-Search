import { useState } from "react";
import SearchForm from "./Design/SearchForm/SearchForm";
import GithubDetail from "./Components/GithubDetail/GithubDetail";
import GithubUsers from "./Components/GithubUsers/GithubUsers";

const Main = () => {
    const [user, setUser] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    
    const handleSearch = (search) => {
        setUser(search)
        setCurrentUser(null)
    }

    const clearField = () => {
        setUser(null);
        setCurrentUser(null)
    }

    const handleClick = (e) => {
        setCurrentUser(e.target.innerHTML)
    }

    const handleClose = () => {
        setCurrentUser(null);
    }

    return (
        <div className="content">
            <SearchForm onSearch={handleSearch} resetButton={clearField} />
            {
                user && (
                    <div className="searchResults">
                        <GithubUsers username={user} onClick={handleClick} />
                    </div>
                )
            }

            {
                currentUser && (
                    <GithubDetail username={currentUser} onClose={handleClose} />
                )
            }
        </div>
    )
}

export default Main;