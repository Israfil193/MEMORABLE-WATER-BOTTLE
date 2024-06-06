import propTypes from 'prop-types';

import './cart.css';

const Cart = ({cart,handleRemoveFromCart}) => {
    return (
        <div>
            <h4>Cart:{cart.length}</h4>
            <div className="cart-container">
                {cart.map(bottle=> <div key={bottle.id}>
                    <img src={bottle.img}></img>

                    <button onClick={()=>handleRemoveFromCart(bottle.id)}
                    >Remove</button>
                </div>)}
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart:propTypes.array.isRequired,
    handleRemoveFromCart:propTypes.func.isRequired
}
export default Cart;