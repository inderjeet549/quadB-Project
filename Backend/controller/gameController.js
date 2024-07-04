import Game from "../model/gameModel.js";

export const getGame = async(req, res) => {
    try {
        const game = await Game.find();
        res.status(200).json(game);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};

export const addGame = async(req,res)=>{
    try {
        const game = await Game.create(req.body);
        res.status(200).json(game);
    }catch(error){
        console.log("Error: ", error);
        res.status(500).json(error);
    }
}