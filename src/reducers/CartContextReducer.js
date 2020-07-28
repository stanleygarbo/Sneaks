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
        case 'REMOVE_FROM_CART':
            let newArr = state.items
            newArr.splice(action.payload.index,1)
            return{
                items:newArr,
                total: state.total-parseInt(action.payload.retailPrice)
            }
        default:
            return state
    }
}

