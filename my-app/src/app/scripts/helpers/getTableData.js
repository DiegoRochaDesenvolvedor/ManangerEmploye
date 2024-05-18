const axios = require('axios');

export default async function getAllEmployees() {
  try {
    const response = await axios.get('http://localhost:4000/api/all-employees');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
