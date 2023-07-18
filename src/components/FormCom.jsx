import React, { useReducer } from "react";

const FormCom = () => {

    const [state, dispatch] = useReducer(
        (state, action) => ({
            ...state,
            ...action
        }), {
            firstname: '',
            lastname: '',
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        dispatch({[name]: value})
    }

    return (<>
        <input 
            placeholder="Firstname" 
            name="firstname"
            type="text" 
            onChange={handleChange} 
            value={state.firstname}
        />
        <input 
            placeholder="Lastname" 
            name="lastname"
            type="text" 
            onChange={handleChange} 
            value={state.lastname}
        />

        <div>Name: {state.firstname} {state.lastname}</div>
    </>)

}

export default FormCom;