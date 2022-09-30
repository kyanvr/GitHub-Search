import List from "../../Design/List/List";
import ListItem from "../../Design/ListItem/ListItem";
import Loader from "../../Design/LoadingIndicator/LoadingIndicator";
import Error from "../../Design/Error/Error";
import useGithubApi from "../../Hooks/useGithubApi";
import './GithubFollowers.css';

const GithubFollowers = ({ username }) => {

    const { isLoading, data, error } = useGithubApi(
        `https://api.github.com/users/${username}/followers`
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

    return (
        <div className="followers">
            {
                data.length > 0 && (
                    <>
                    <h3>Followers:</h3>
                    <List className='followersList'>
                        {data.map((user) => (
                            <ListItem 
                            key={user.login}
                            name={user.login}
                            className='followersList--listItem'
                            />
                        ))}
                    </List>
                    </>
                )
            }
        </div>
    )
}

export default GithubFollowers;