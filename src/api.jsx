import axios from 'axios';

const elden = 'https://6705f368031fd46a831174ec.mockapi.io/api/elden';

export const getItem = async () => {
    try {// es para intentar hacer algo y si no se puede... hace lo
        // esta en el catch
      const response = await axios.get(elden + "/Item");
        return response.data//devuelve la api y solo muestra la informacion que te pido

    } catch (error) {
        console.error('Error fetching data: ', error);
        return error

    }
  };
  export const getPJ = async () => {
    try {// es para intentar hacer algo y si no se puede... hace lo
        // esta en el catch
      const response = await axios.get(elden + "/personaje");
        return response.data//devuelve la api y solo muestra la informacion que te pido

    } catch (error) {
        console.error('Error fetching data: ', error);
        return error

    }
  };
  export const createPJ = async (newPJ) => {
    try {
        const response = await axios.post(elden + "/personaje", newPJ);
        return response.data;
    } catch (error) {
        console.error('Error creating new character: ', error);
        return error;
    }
};
  export const deletePJ = async (id_pj) => {
    try {
        await axios.delete(`${elden}/personaje/${id_pj}`);
    } catch (error) {
        console.error('Error deleting character:', error);
    }
};
export const updatePJ = async (id_pj, updatedPJ) => {
  try {
      const response = await axios.put(`${elden}/personaje/${id_pj}`, updatedPJ);
      return response.data;
  } catch (error) {
      console.error('Error updating character:', error);
      return error;
  }
};