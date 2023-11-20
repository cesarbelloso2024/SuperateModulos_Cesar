
// api/filterEpisodes.js
import axios from 'axios';
import baseUrl from '../utils/baseUrl.js'; // Ajusté la ruta para que sea relativa

async function filterEpisodes(name , status) {
  try {
    const response = await axios.get(`${baseUrl}/episode`, {
      params: {name, status },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error filtering episodes:', error);
    throw error;
  }
}

export { filterEpisodes };