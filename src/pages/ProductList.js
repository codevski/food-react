import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { List, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";

const GET_PRODUCTS = gql`
  {
        getProducts {
            id
            name
            description
            price
            image
            type
          }
        }
`;

function ProductList() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const SERVER_URL = "http://localhost:8080"

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Row>
      <Col span={12} offset={6}>
    <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 10,
    }}
    dataSource={data.getProducts}
    footer={
      <div>
        <b>Food React</b> Product List
      </div>
    }
    renderItem={item => (
      <List.Item
        key={item.title}
        extra={
          <img
            width={172}
            alt="logo"
            src={`${SERVER_URL}/images/${item.image}`}  
          />
        }
      >
        <List.Item.Meta
          title={
            <Link to={{
              pathname: item.name,
              state: {
                item
              }
            }}>{item.name}</Link>
        }
          description={item.description}
        />
        
        {item.content}
      </List.Item>
    )}
  />
  </Col>
  </Row>
  )
}


export default ProductList

// const GET_PRODUCTS = gql`
//   {
//         getProducts {
//           ... on Food {
//             id
//             name
//             description
//             price
//             image
//           }
//           ... on Drink {
//             id
//             name
//             description
//             price
//             image
//           }
//         }
//       }
// `;