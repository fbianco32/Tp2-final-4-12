import { Voto } from '../Models/index.js'

class VotoController {
    constructor() { }

    createVoto = async (req, res) => {
        try {
            const { distrito, candidato } = req.body;
            const newVoto = await Voto.create({ distrito, candidato });
            res.status(200).send({ sucess: true, message: newVoto });
        }
        catch (error) {
            res.status(400).send({ sucess: false, message: error.message })
        }
    };

    getAllVotosByZona = async (req, res) => {
        try {
            const allVotosByZona = await Voto.getVotosByZona();
            res.status(200).send({ sucess: true, message: allVotosByZona });
        }
        catch (error) {
            res.status(400).send({ sucess: false, message: error.message })
        }
    };
    
}

export default VotoController