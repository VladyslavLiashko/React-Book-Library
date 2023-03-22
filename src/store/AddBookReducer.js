const defaultState = {
    collection: []
}

export const AddBookReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            return { ...state, collection: [...state.collection, action.payload] }

        default:
            return state
    }
}