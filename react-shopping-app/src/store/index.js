import { createStore } from "redux";
import products from '../data.json';

// let sizes = products.reducer((acc, cv) => {
//     acc = acc.concat(cv.availableSizes);
//     return acc;
// }, []);

// let uniqueSizes = [...new Set(sizes)];

function reducer(prevState, action) {
    switch (action.type) {
        case 'handleOrderBy':
            return {
                ...prevState,
                selectedOrder: action.payload.event.target.value
            };
        case 'handleOrderProducts':
            if (action.payload !== 'initial') {
                let sortedProducts = [...prevState.products];
                console.log(sortedProducts);
                if (prevState.selectedOrder === 'highest') {
                    sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
                }
                if (prevState.selectedOrder === 'lowest') {
                    sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
                }
                return { ...prevState, products: sortedProducts };
            } else {
                return;
            }
        default:
            return { products: products, selectedOrder: '' };
    }
}

let store = createStore(reducer);

export default store;