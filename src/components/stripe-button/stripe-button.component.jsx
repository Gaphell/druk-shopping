import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButtonComponent = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IkOhdSHVibCV0OQHoA2jpEdXs2Q10KnESrCR5dNOTnQIp7jqWcxqBo5c4Mznl70rCs4ZPSxrLNuzAl3csRmppZz000SsLX6n0';

    const onToken = token => {
        console.log(token);
        alert('Paid');
    }

    return (
        <StripeCheckout
            label='Pay Up'
            name='Druk shopping'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Up'
            token={onToken}
            stripeKey={publishableKey} />
    );
};

export default StripeCheckoutButtonComponent;