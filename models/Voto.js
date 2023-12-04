import VotoDAO from "../DAOs/VotoDao.js"

class Voto { 
    static async create(voto) {
        VotoDAO.createVoto(voto)
    }

    static async getVotosByZona() {
        return VotoDAO.getVotosByZona();
    }
}

export default Voto
