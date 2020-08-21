import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../../AppContext';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Form, Item, Input, Label } from 'native-base';
import { StyleSheet } from 'react-native';

const Cart = () => {
    const Promocode = "MIRRAW50";
    const { cart, setCart } = useAppContext();
    const [promo, setPromo] = useState('');
    const [discout, setDiscout] = useState(0);
    const [error, setError] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let totalAmountOfGroup = 0.0;
        for (let count = 0; count < cart.length; count += 1) {
            totalAmountOfGroup += cart[count].inr;
        }
        setTotalPrice(totalAmountOfGroup)
    }, [cart])


    const removeFromCart = (id) => {
        let newCart = id && cart.length > 0 ? cart.filter((product) => product.id !== id) : cart;
        setCart(newCart);
    }


    const onPromoCodeSubmit = () => {
        promo === Promocode ? setDiscout(50) : setError(true) && setDiscout(0)
    }

    return (
        <Container>
            <Content padder>
                {cart && cart.length > 0 ?
                    <>
                        {cart.map((product) =>
                            <Card key={product.id}>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={{ uri: product.image }} />
                                        <Body>
                                            <Text>{product.name}</Text>
                                            <Text note>{product.inr} Rs</Text>
                                        </Body>
                                    </Left>
                                    <Right>
                                        <Button transparent onPress={() => removeFromCart(product.id)}>
                                            <Text>REMOVE</Text>
                                        </Button>
                                    </Right>
                                </CardItem>

                            </Card>
                        )}
                        <Card >
                            <CardItem>
                                <Left>
                                    <Icon name='pricetags' style={styles.themeColor} />
                                    <Text style={styles.themeColor}>Total</Text>
                                </Left>
                                <Right>
                                    <Text style={styles.themeColor}>{totalPrice} Rs</Text>
                                </Right>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Icon name='pricetags' style={styles.themeColor} />
                                    <Text style={styles.themeColor}>Discount</Text>
                                </Left>
                                <Right>
                                    <Text style={styles.themeColor}>{discout} Rs</Text>
                                </Right>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Icon name='pricetags' style={styles.themeColor} />
                                    <Text style={styles.themeColor}>Payable Amount</Text>
                                </Left>
                                <Right>
                                    <Text style={styles.themeColor}>{totalPrice - discout} Rs</Text>
                                </Right>
                            </CardItem>

                        </Card>
                        <Form style={{ margin: 10 }}>
                            <Item stackedLabel>
                                <Label>Apply Promocode</Label>
                                <Input value={promo} onChangeText={(text) => { setPromo(text); setError(false) }} />
                            </Item>
                            {error ? <Text style={styles.errorText}>Invalid promocode</Text> : null}
                            <Text style={styles.promocodeText}>Use promocode "MIRRAW50" to get Rs 50 off</Text>
                            <Button rounded danger style={{ alignSelf: 'center', margin: 10 }} onPress={() => { setDiscout(0); onPromoCodeSubmit(500) }} disabled={promo.length > 0 ? false : true}>
                                <Text>APPLY</Text>
                            </Button>
                        </Form>
                    </> : <Text style={{ textAlign: 'center', flex: 1 }}>Cart is empty!</Text>}
            </Content>
        </Container>
    );
};

const styles = StyleSheet.create({
    themeColor: {
        color: '#f4511e'
    },
    errorText: { color: 'red', textAlign: 'center', paddingBottom: 10 },
    promocodeText: { textAlign: 'center', color: 'green' }

});

export default Cart;