import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import productsList from './db/productsList'
const AppContext = React.createContext({});

export const AppProvider = props => {
    const { children } = props;
    const [products, setProducts] = useState(productsList);
    const [cart, setCart] = useState([]);
    const [orders, setOrders] = useState([]);
    return (
        <AppContext.Provider value={{ products, setProducts, cart, setCart, orders, setOrders }}>
            {children}
        </AppContext.Provider>
    );
}

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export const useAppContext = () => useContext(AppContext);
