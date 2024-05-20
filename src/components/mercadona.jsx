
import React from 'react';
import Producto from '../components/producto'; // Asegúrate de que el nombre del archivo coincida
import Pasajero from '../components/pasajerodelcarro'; // Asegúrate de que el nombre del archivo coincida
import { useDispatch, useSelector } from 'react-redux';
import { addTocart, clearCart, delFromCart } from '../actions/accionesautomovilisticas';

function Mercadona() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const { products, cart } = state.shopping;

  return (
    <div>
      <h2>Mercadona</h2>
      <h3>Productos</h3>
      <article className='caja grid-responsive'>
        {products.map((product) => (
          <Producto key={product.id} data={product} addToCarrito={() => dispatch(addTocart(product.id))} />
        ))}
      </article>
      <h3>Carrito</h3>
      <button onClick={() => dispatch(clearCart())}>Limpiar Carrito</button>
      <article className='caja grid-responsive'>
        {cart.map((item, index) => (
          <Pasajero 
            key={index} 
            data={item} 
            deleteoneToCarrito={() => dispatch(delFromCart(item.id))}
            deleteallToCarrito={() => dispatch(delFromCart(item.id, true))} 
          />
        ))}
      </article>
    </div>
  );
}

export default Mercadona;
