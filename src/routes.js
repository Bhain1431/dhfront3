import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./App";
import HomePage from "./components/home/HomePage";
import CreatePage from "./components/create/CreatePage";
//import ProuductPage from "./components/products/ProductPage";


export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="/create" component={CreatePage} />
        {/*<Route path="products" component={ProuductPage} />*/}
        {/*<Route path="*" component={NotFoundPage} />*/}
    </Route>
);


