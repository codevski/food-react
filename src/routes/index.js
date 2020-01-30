import React from 'react';
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

import ProductList from "../pages/ProductList"
import SingleProduct from "../pages/SingleProduct"

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={ProductList} />
      <Route path="/:id" exact component={SingleProduct} />
    </Switch>
  );
}
