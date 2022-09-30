import './ListItem.css';

const ListItem = ({name, onClick }) => {
    return (
        <li className='list__listItem' onClick={onClick}>{name}</li>
    )
}

export default ListItem