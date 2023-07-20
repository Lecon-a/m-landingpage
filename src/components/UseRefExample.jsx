import React, {useRef, useEffect, useState, useMemo} from "react";

const UseRefExample = () => {

    const inputRef = useRef(null);
    const idRef = useRef(3);

    const [names, setNames] = useState([
        {
            id: 1,
            name: 'Sunday'
        },
        {
            id: 2,
            name: 'Peter'
        }
    ]);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const onAddName = (e) => {
        e.preventDefault();
        setNames([
            ...names, 
            {   
                id: idRef.current++,
                name: inputRef.current.value
            }
        ]);
        inputRef.current.value = "";
    }

    return (<>
        <h4>UseRef Example</h4>
        <div>
            {
                names.map(name => <button key={name.id}>{name.id}. {name.name}</button>)
            }
        </div>
        <input
            type="text"
            ref={inputRef}
        />
        <button onClick={onAddName}>Add Name</button>
    </>)
}

export default UseRefExample;