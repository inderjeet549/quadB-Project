import mongoose from "mongoose";

const gameSchema = mongoose.Schema({
    // product name
    gameName: String,
    // product price
    price: Number,
    // product category
    category: String,
    // image link
    image: String,
    // product publisher
    Publisher: String,
    // product id
    PrductId:{
        type:Number,
        // required: true,
        unique:true,
    } 
});
const Game = mongoose.model("Game", gameSchema);
export default Game;