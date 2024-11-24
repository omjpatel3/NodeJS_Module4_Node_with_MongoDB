const mongoose = require('mongoose');

const main = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/node3db')
        .then(() => console.log("Connected to order db"));
};
main();

const Schema = mongoose.Schema;


const OrderSchema = new Schema({
    orderId:  String, 
    order: String, 
    status:  String,  
    totalPrice : Number, 
})

const OrderModel = mongoose.model('Order', OrderSchema);

module.exports = OrderModel;
