import mongoose from 'mongoose'

let votos = [];

class VotoDAO {
  static async createVoto(votoData) {
    votos.push(votoData)
  }

  static async getVotosByZona(){
    const result = {};
    votos.forEach(entry => {
      const { distrito, candidato } = entry;
      if (!result[distrito]) {
        result[distrito] = {};
      }
      if (!result[distrito][candidato]) {
        result[distrito][candidato] = 1;
      } else {
        result[distrito][candidato]++;
      }
    });
    return result;
  }
}

export default VotoDAO