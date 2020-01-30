import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const ADD_CART = gql`
  mutation AddCart($item: String, $price: Float, $qty: Int) {
    AddCart(item: $item, price: $price, qty: $qty) {
      item
      price
      qty
    }
  }
`;
function AddToCart({ name, totalPrice, qty }) {
  const [addCart, { loading, error }] = useMutation(ADD_CART, {
    onError(...error) {
      return <p>{error.message}</p>
    },
    onCompleted() {
      console.log(`Successfully added item to cart`)
    }
  });

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>;;

  return(
    <div>
      <form onSubmit={e=> {
        e.preventDefault();
        try {
          addCart({ 
            variables: { 
              "item": name, 
              "price": parseFloat(totalPrice * qty),
              "qty": qty
            } });
        } catch (error) {
          console.log(error.message)
        }
        
      }}>
      <button>Add to cart</button>
      </form>
    </div>
  )
}

export default AddToCart;