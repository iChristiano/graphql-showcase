const orders = [
    {
        data: '2017',
        subtotal: 126.50,
        items: [
            {
                product: {
                    id: 'whitesneaker',
                    description: 'Old White Sneaker',
                    price: 63.25
                },
                quantity: 2
            }  
        ]
    }
];

function getAllOrders() {
    return orders;
}

module.exports = {
    getAllOrders
};