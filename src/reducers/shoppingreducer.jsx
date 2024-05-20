import { ADD_TO_CARRITO, LIMPIEZA_CARRITO, REMOVE_ALL_CARRITO, REMOVE_ONE_CARRITO } from "../tipo/type";

export const initialstate = {
  products: [
    { id: 1, nombre: "Producto 1", descripcion: "Excelente debe comprarlo", precio: 100 },
    { id: 2, nombre: "Producto 2", descripcion: "Excelente debe comprarlo", precio: 100 },
    { id: 3, nombre: "Producto 3", descripcion: "Excelente debe comprarlo", precio: 100 },
    { id: 4, nombre: "Producto 4", descripcion: "Excelente debe comprarlo", precio: 100 },
    { id: 5, nombre: "Producto 5", descripcion: "Excelente debe comprarlo", precio: 100 },
    { id: 6, nombre: "Producto 6", descripcion: "Excelente debe comprarlo", precio: 100 },
    { id: 7, nombre: "Producto 7", descripcion: "Excelente debe comprarlo", precio: 100 },
    { id: 8, nombre: "Producto 8", descripcion: "Excelente debe comprarlo", precio: 100 },
    { id: 9, nombre: "Producto 9", descripcion: "Excelente debe comprarlo", precio: 100 },
  ],
  cart: [],
};

export function ShoppingReducer(state = initialstate, action) {
  switch (action.type) {
    case ADD_TO_CARRITO: {
      let newItem = state.products.find((product) => product.id === action.payload);
      if (!newItem) return state; // Verificar si newItem es undefined
      
      let itemInCart = state.cart.find(item => item.id === newItem.id);
      return itemInCart 
        ? {
            ...state,
            cart: state.cart.map(item => 
              item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
            )
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case REMOVE_ONE_CARRITO: {
      let itemToDelete = state.cart.find(item => item.id === action.payload);
      if (!itemToDelete) return state; // Verificar si itemToDelete es undefined

      return itemToDelete.quantity > 1 
        ? {
            ...state,
            cart: state.cart.map(item => 
              item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
            )
          }
        : {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload),
          };
    }
    case REMOVE_ALL_CARRITO: {
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    }
    case LIMPIEZA_CARRITO: {
      return initialstate;
    }
    default:
      return state;
  }
}
