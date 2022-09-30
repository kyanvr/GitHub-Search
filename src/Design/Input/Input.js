import './Input.css';

const Input = ({onChange, value}) => {
    return (

        <input 
        type='text' 
        name="search" 
        className="input--search" 
        onChange={onChange} 
        value={value} 
        placeholder="Search a GitHub user" 
        ></input>
    )
}

export default Input;