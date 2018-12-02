const initialState = {
    products: []
};

const CartItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                products: [...state.products, action.payload]
            };
        case 'INCREMENT_CART':
            return {
                products:
                state.products.map((product) => {
                    if (product.product.title === action.payload.title) {
                        return {
                            ...product,
                            count: product.count + action.payload.count
                        }
                    } else {
                        return product
                    }

                })
            };
        case 'MODIFY_CART':
            return {
                products:
                state.products.map((product) => {
                    if (product.product.title === action.payload.title) {
                        return {
                            ...product,
                            count: action.payload.count
                        }
                    } else {
                        return product
                    }

                })
            };
        case 'DELETE_FROM_CART':
            let index1;
            if (state.products.length === 1) {
                return {
                    products: []
                }
            }
            state.products.forEach((product, index) => {
                if (product.product.title === action.payload.title) {
                    index1 = index;
                }
            });
            const newArray = state.products.splice(index1, 1)
            return {
                products: state.products
            }
        default:
            return state;
    }
};

export default CartItemReducer;