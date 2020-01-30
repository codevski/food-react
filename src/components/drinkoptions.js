import React, { useState } from "react";
import _ from "lodash";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Radio } from "antd";

const DRINK_OPTIONS = gql`
  {
    getSizes {
      size
      price
    }
    getMilk {
      name
      price
    }
  }
`;

function DrinkOptions({ setTotalPrice, price }) {
  const { loading, error, data } = useQuery(DRINK_OPTIONS);
  const [size, setSize] = useState(0);
  const [sizePrice, setSizePrice] = useState(0);
  const [milkPrice, setMilkPrice] = useState(0);
  const [value, setValue] = useState(0.0);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      <Radio.Group
        onChange={e => setSize(e.target.value)}
        value={size}
      ></Radio.Group>
      <Radio.Group
        onChange={function(e) {
          setSize(e.target.value);
          setSizePrice(e.target.price);
          setTotalPrice(price + milkPrice + e.target.price);
        }}
        value={size}
      >
        <div>
          Size:{" "}
          {_.map(data.getSizes, function(x, index) {
            return (
              <Radio value={index} price={x.price} key={x.size}>
                {x.size}
              </Radio>
            );
          })}
        </div>
      </Radio.Group>
      <br />
      <Radio.Group
        onChange={e => setValue(e.target.value)}
        value={value}
      ></Radio.Group>
      <Radio.Group
        onChange={function(e) {
          setValue(e.target.value);
          setMilkPrice(e.target.price);
          setTotalPrice(price + sizePrice + e.target.price);
        }}
        value={value}
      >
        <div>
          Milk:{" "}
          {_.map(data.getMilk, function(x, index) {
            return (
              <Radio value={index} price={x.price} key={x.name}>
                {x.name}
              </Radio>
            );
          })}
        </div>
      </Radio.Group>
    </>
  );
}

export default DrinkOptions;
