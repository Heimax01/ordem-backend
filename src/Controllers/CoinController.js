const Coin = require('../models/Coin');

module.exports = {

  async index(req, res){

    const listcoins = await Coin.find();

    return res.json(listcoins);

  },


  async  store(req, res) {
        const { name, description } = req.body;
       

        let coin = await Coin.findOne({ name, description });

    if((!name) || (!description)){
      return res.status(204).json();
    }


    if(!coin){
       coin = await Coin.create({name, description});

       
    } 
        return res.json(coin);
    }
};