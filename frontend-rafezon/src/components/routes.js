import React from 'react';
import { Route } from 'react-router-dom';
import HomeScreen from "./homeScreen";
import ProductDetails from './productDetails';

export const Routes = () => (
  <>
    <Route path="/" exact={true} component={HomeScreen} />
    <Route path="/product/:id" component={ProductDetails} />
  </>

)