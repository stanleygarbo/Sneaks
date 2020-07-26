export const WindowSizeInitState = {
    onlyShowBtnIcons: false,
    forceHideMenu:false
}

export const WindowSizeReducer = (state,action) => {
    switch(action.type){
        case 'SET_ONLY_SHOW_BTN_ICONS':
            return {
                ...state,
                onlyShowBtnIcons: action.payload
            }
        case 'FORCE_HIDE_MENU':
            return {
                ...state,
                forceHideMenu: action.payload
            }
        default:
            return state
    }
}