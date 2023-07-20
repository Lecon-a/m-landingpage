import React, {useState, useMemo, useCallback} from "react";

const SortedList = ({list, sortFunc}) => {
    const sortedValues = useMemo(() => 
        [...list].sort(sortFunc), [list, sortFunc]
    )
    return <div>{sortedValues.join(', ')}</div>
}

const UseMemoExample = () => {

    const [numbers] = useState([10, 20, 30])
    
    const result = useMemo(() => numbers.reduce((acc, currentNumber) => acc + currentNumber, 0), [numbers])
    
    const [names] = useState(['Sunday', 'Peter', 'Afolabi', 'Olalekan', 'Grace'])

    const sortFunc = useCallback((a, b) => a.localeCompare(b) * -1, [])

    return (<>
        <h4>UseMemo Example</h4>
        <div>Result: {result}</div>
        <div>Unsorted Name: {names.join(', ')}</div>
        Sorted Name: <SortedList list={names} sortFunc={sortFunc}/>
    </>)
}

export default UseMemoExample;