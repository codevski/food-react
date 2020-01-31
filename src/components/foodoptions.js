import React from "react";
import _ from "lodash";
import { Checkbox } from "antd";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const FOOD_OPTIONS = gql`
  {
    getExtra {
      name
      price
    }
  }
`;

function FoodOptions({ totalPrice, setTotalPrice }) {
  const { loading, error, data } = useQuery(FOOD_OPTIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      {_.map(data.getExtra, function(x, index) {
        return (
          <Checkbox
            onChange={function(e) {
              e.target.checked
                ? setTotalPrice(totalPrice + x.price)
                : setTotalPrice(totalPrice - x.price);
            }}
            key={x.name}
          >
            {x.name}
          </Checkbox>
        );
      })}
    </>
  );
}

export default FoodOptions;
