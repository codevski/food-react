import React, { useState } from "react";
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

function FoodOptions({totalPrice, setTotalPrice}) {
  const { loading, error, data } = useQuery(FOOD_OPTIONS);
  const [ checkedValues, setCheckedValues ] = useState([])

  const isDisabled = (id) => {
    console.log(id)
    console.log(checkedValues)
    return(
      checkedValues.length > 1 && checkedValues.indexOf(id) === -1
    );
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      {_.map(data.getExtra, function(x, index) {
        return (
          <Checkbox
            onChange={function(e) {
              setCheckedValues([index])
              if (e.target.checked) {
                setTotalPrice(totalPrice + x.price);
              } else {
                setTotalPrice(totalPrice - x.price);
              }
            }}
            key={x.name}
            value={index}
            disabled={isDisabled(index)}
          >
            {x.name}
          </Checkbox>
        );
      })}
    </>
  );
}

export default FoodOptions;
