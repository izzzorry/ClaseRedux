import { TYPES } from "../actions/comprandoAndo";

export const carritoestadoinicial = {
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

export function ShoppingReducer(state, action) {
  console.log("Reducer called with action:", action);
  switch (action.type) {
    case TYPES.ADD_TO_CARRITO: {
      let newItem = state.products.find((product) => product.id === action.payload);
      let iteminCart = state.cart.find(item => item.id === newItem.id);
      console.log("Adding newItem to cart:", newItem);
      return iteminCart ?{...state,cart:state.cart.map(item=>item.id===newItem.id ? {...item,quantity:item.quantity+1}:item)}:{...state,
        cart: [...state.cart, {...newItem,quantity: 1}],};
      
    }
    case TYPES.REMOVE_ONE_CARRITO:
        let itemtoDelete = state.cart.find(item => item.id === action.payload);

      return itemtoDelete.quantity > 1 ? {...state,cart:state.cart.map((item)=>item.id===action.payload?{...item,quantity:item.quantity-1}:item),}:{...state, cart: state.cart.filter(item => item.id !== action.payload),};
    case TYPES.REMOVE_ALL_CARRITO:
        return{
            ...state,
            cart:state.cart.filter((item) =>item.id !== action.payload),
        };
        
      
    case TYPES.LIMPIEZA_CARRITO:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
}
