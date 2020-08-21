import * as React from 'react';
import { Container, Content, Header, Button, Text, Toast } from 'native-base';
import ProductItem from '../../components/ProductItem';
import { useAppContext } from '../../../AppContext';

const Products = () => {
    const { products, cart, setCart } = useAppContext();
    const addToCart = (product) => {
        let newCart = cart.length > 0 ? [...cart, product] : [product];
        setCart(newCart);

    }
    const removeFromCart = (id) => {
        let newCart = id && cart.length > 0 ? cart.filter((product) => product.id !== id) : cart;
        setCart(newCart);
    }

    return (
        <Container >
            <Content padder>
                {products && products.length > 0 ? products.map((product) =>
                    <ProductItem key={product.id} item={product} inCart={cart.length > 0 && cart.includes(product) ? true : false} onAddToCart={(item) => addToCart(item)} OnRemove={(ProductId) => removeFromCart(ProductId)} />) : null}
            </Content>
        </Container>
    );
}

export default Products;