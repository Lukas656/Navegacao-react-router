import { reducer } from './reducers'

const initialState = {
    cart: [],
    products: [],
    user: null,
    // foco deste exercicio é p number
    number: 0
}

export {
    initialState,
    reducer,
}