import React, { useState, useReducer } from "react";

const ListNameWithReducer = () => {

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'SET_NAME':
                return { 
                    ...state, 
                    name: action.payload,
                    isValid: false,
                }
        
            case 'ADD_NAME':
                return { 
                    ...state, 
                    names: [...state.names, state.name],
                    name: '',
                }
             
            case 'INVALID':
                return {
                    ...state,
                    isValid: true,
                }    
        }
    }, {
        names: [],
        name: '',
        isValid: false,
        errorMsg: 'Name field cannot be empty'
    })

    const handleChange = (e) => {
        dispatch({type: 'SET_NAME', payload: e.target.value})
    }

    const onAddName = (e) => {
        e.preventDefault();
        state.name ? dispatch({type: 'ADD_NAME'}) : dispatch({type: 'INVALID'})
    }

    const displayNames = <ul>
        {
            state.names.map(name => <li key={name}>{name}</li>)
        }
    </ul>

    return (<>
        <input 
            placeholder="Name" 
            type="text" 
            onChange={handleChange} 
            value={state.name}
        />
        {state.isValid && <div className="error">{state.errorMsg}</div>}
        <div>Names: {displayNames}</div>
        <input type="submit" onClick={onAddName} value={'Add Name'} />
    </>)

}

export default ListNameWithReducer;