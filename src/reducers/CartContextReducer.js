export const CartContextInitState = {
    items:[],
    total:0
}

export const CartContextReducer = (state,action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                items:[...state.items,action.payload],
                total: state.total+parseInt(action.payload.retailPrice)
            }
        default:
            return state
    }
}

