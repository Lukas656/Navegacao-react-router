import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
const initialState = {
    cart: [],
    products: [],
    user: null,
    // foco deste exercicio é p number
    number: 0
}

// Função que para cada estado ela adiciona uma nova ação
function reducer(state, action) {
    switch (action.type) {
        case 'addNumber':
            return { ...state, number: state.number + 2 }
        case 'login':
            return { ...state, user: { name: action.payload } }
        default:
            return state
    }
}
const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className='center'>
                {state.user ?
                    <span className='text'>{state.user.name}</span>
                    :
                    <span className='text'>Sem Usuário</span>
                }

                <span className='text'>{state.number}</span>
                <div>
                    <button className='btn' onClick={() => dispatch({ type: 'addNumber' })}>+2</button>
                    <button className='btn' onClick={() => dispatch({ type: 'login', payload: 'Lucas Santos' })}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
