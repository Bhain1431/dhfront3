import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./App";
import HomePage from "./components/home/HomePage";
import CreatePage from "./components/create/CreatePage";
import ProductPage from "./components/products/ProductPage";
import NotFound from "./components/notfound/NotFound";
import CheckOut from "./components/checkout/CheckOut";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="create" component={CreatePage} />
        <Route path="home" component={HomePage} />
        <Route path="products" component={ProductPage} />
            <Route path="checkout" component={CheckOut} />
        <Route path="*" component={NotFound} />

    </Route>
);


