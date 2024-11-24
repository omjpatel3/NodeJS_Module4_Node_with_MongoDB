const mongoose = require('mongoose');

const main = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/node3db')
        .then(() => console.log("Connected to review db"));
};
main();

const Schema = mongoose.Schema;


const ReviewSchema = new Schema({
    reviewId: String,
    review: String,
    rating: Number
    
    
},); 
const ReviewModel = mongoose.model('Review', ReviewSchema);

module.exports = ReviewModel;
