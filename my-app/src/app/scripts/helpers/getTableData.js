const axios = require('axios');

export default async function getAllEmployees() {
  try {
    const response = await axios.get('http://localhost:4000/api/all-employees');
    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log('response', response)
    return response.data;
  } catch (error) {
    console.error(error);
  }
}