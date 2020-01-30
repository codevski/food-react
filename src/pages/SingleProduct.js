import React, { useState } from "react";
import { InputNumber, Col, Row, Button } from "antd";
import FoodOptions from "../components/foodoptions";
import DrinkOptions from "../components/drinkoptions";
import AddToCart from "../components/addtocart";
import { Link } from "react-router-dom";

function SingleProduct(props) {
  const {
    id,
    name,
    description,
    price,
    type
  } = props.location.state.item;

  const [qty, setQty] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);

  let options;

  if (type === "Food") {
    // Load Food Options
    options = (
      <FoodOptions totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
    );
  }
  if (type === "Drink") {
    // Load Drink Options
    options = (
      <DrinkOptions
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        price={price}
      />
    );
  }

  return (
    <Row>
      <Col
        span={12}
        offset={6}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div>
          <div>ID: {id}</div>
          <div>Name: {name}</div>
          <div>Description: {description}</div>
          <div>Options: </div>
          {options}
          <div>
            Qty:
            <InputNumber
              min={1}
              max={10}
              defaultValue={1}
              onChange={e => {
                setQty(e);
              }}
            />
          </div>
          <div>Total Price: {totalPrice * qty}</div>
          <AddToCart name={name} totalPrice={totalPrice} qty={qty} />
          <Link to="/">
            <Button type="danger">Back</Button>
          </Link>
        </div>
      </Col>
    </Row>
  );
}

export default SingleProduct;
