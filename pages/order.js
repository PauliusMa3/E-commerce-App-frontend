import React from 'react';
import Order from '../components/Order.js'


const OrderPage = (props) => {
    return (
        <Order id={props.query.id}/>
    )
}  

export default OrderPage;