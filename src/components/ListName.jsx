import React, { useState, useMemo } from "react";

const ListName = () => {

    const [list, setList] = useState(['Sunday', 'Peter', 'Afolabi']);
    const [name, setName] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [errorMsg, setErrorMsg] = useState('')

    const displayNames = <ul>{list.map(name => <li key={name}>{name}</li>)}</ul>

    const onAddName = (e) => {
        e.preventDefault();
        !name && setIsValid(true);
        name ? setList([...list, name]) : setErrorMsg('Name input cannot be empty.');
        setName('');
    }

    const hangleChange = (e) => {
        setIsValid(false)
        setName(e.target.value)
    }
    
    return (<>
        {displayNames}
        <input placeholder="Name" type="text" value={name} onChange={hangleChange} />
        {isValid && <div className="error">{errorMsg}</div>}
        <input type="submit" onClick={onAddName} value={'Add Name'} />
    </>)

}

export default ListName;