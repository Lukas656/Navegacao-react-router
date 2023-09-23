import React, { useState } from "react";

const initilState ={
    number: 1234,
    text: 'Context API + Hooks'

}
export const AppContext = React.createContext(initilState)

const Store = props =>{
    const [state, setState] = useState(initilState)
    function updateState(key, value){
        setState({
            ...state,
            [key]: value
        })
    }
    return(
        <AppContext.Provider value={{
            number: state.number, 
            text: state.text,
            setNumber: n => updateState('number', n), 
            settext: t => updateState('text', t), 
        }}>
            {props.children}
        </AppContext.Provider>
    )
}


export default Store