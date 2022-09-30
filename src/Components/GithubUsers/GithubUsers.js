import List from "../../Design/List/List";
import ListItem from "../../Design/ListItem/ListItem";
import Error from "../../Design/Error/Error";
import useGithubApi from "../../Hooks/useGithubApi";
import Loader from "../Loader/Loader";

const GithubUsers = ({ username, onClick }) => {

    const { isLoading, data, error } = useGithubApi(
        `https://api.github.com/search/users?q=${username}`
    );

    if (isLoading) {
        return (
             <>
             <Loader />
             </>
        )
    }

    if (error) {
        return (
            <>
                <Error />
            </>
        )
    }

    if (data.items.length === 0) {
        return (
            <>
                <p>No results found</p>
            </>
        )
    }

    return (

        <div className="users">
            <h2>{data.items.length} result(s)</h2>
            <List className='usersList'>
                {data.items.map((user) => (
                    <ListItem 
                    key={user.login}
                    name={user.login}
                    onClick={onClick}
                    />
                ))}
            </List>
            
        </div>
        
    )
}

export default GithubUsers;