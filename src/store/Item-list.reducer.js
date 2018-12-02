const initialState = {
    products: []
};

const ItemListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ITEMDATA_START':
            return state;
        case 'FETCH_ITEMDATA_SUCCESS':
            return { ...state, products: action.payload.map((item, index) => item) };
        case 'FETCH_ITEMDATA_ERROR':
            return { ...state, products: action.payload };
        default:
            return state;
    }
};

export default ItemListReducer;