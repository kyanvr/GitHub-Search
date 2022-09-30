import { useState } from "react";
import Reset from "../Button/Reset/Reset";
import Search from "../Button/Search/Search";
import Input from "../Input/Input";
import './SearchForm.css';

const SearchForm = ({onSearch, resetButton} ) => {
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleReset = () => {
        setSearch('')
        onSearch(null)
    }

    return (
        <div className="searchForm">
            <Input onChange={handleChange} value={search}/>
            <Search onClick={() => onSearch(search)} active={search.length >= 4 ? 'active' : 'disabled'} />
            <Reset onClick={() => {handleReset(); resetButton()}} />
        </div>
    )
}

export default SearchForm;