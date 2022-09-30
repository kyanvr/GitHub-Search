import Card from "../../Design/Card/Card";
import useGithubApi from "../../Hooks/useGithubApi";
import Error from "../../Design/Error/Error";
import GithubFollowers from "../GithubFollowers/GithubFollowers";
import Loader from "../Loader/Loader";

const GithubDetail = ({ username, onClose }) => {

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

    

    return (

        <Card onClose={onClose}>
            <div className="userHeader">
                <h2>{data.items[0].login}</h2>
                <img src={data.items[0].avatar_url} alt={data.items[0].login} className="userAvatar"></img>
            </div>
            <GithubFollowers username={data.items[0].login}/>
        </Card>
        
    )
}

export default GithubDetail;