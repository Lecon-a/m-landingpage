import React, {useState, useEffect} from "react";

const UseEffectExample = () => {

    const [names, setNames] = useState([]);
    const [selectedNameDetails, setSelectedNameDetails] = useState(null)

    useEffect(() => {
        fetch('/names.json')
            .then(response => response.json())
            .then(data => {
                setNames(data)
            })
            .catch(error => console.log(error));
    }, [])

    const handleClick = (e) => {
        fetch(`/${e.target.innerHTML.toString().toLowerCase()}.json`)
            .then(response => response.json())
            .then(data => {
                setSelectedNameDetails(data)
            })
            .catch(error => console.log(error));
    }

    // mapping name in a button
    const namesButtons = names.map(name => <button key={name} onClick={handleClick}>{name}</button>)

    return (<>
        <h4>UseEffect Example</h4>
        {namesButtons}
        {selectedNameDetails && <div>Details: {JSON.stringify(selectedNameDetails)}</div>}
    </>) 
}

export default UseEffectExample;