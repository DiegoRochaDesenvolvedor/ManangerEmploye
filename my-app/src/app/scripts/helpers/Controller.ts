import axios from 'axios';
export default class Controller {
    static async putData(id: string, name: string, position: string, email: string) {

    try {
      const response = await axios.put(`http://localhost:4000/api/employee/${id}`, {
        name,
        position,
        email,
      });
      window.location.reload();
      return response.data;

    } catch (error) {
        console.error('Erro na requisição:', error);
      }
    }
    static async deleteData(id:string){
        try {
          const response = await axios.delete(`http://localhost:4000/api/employee/${id}`);
          window.location.reload();
          return response.data;
        } catch (error) {
          console.error(error);
        }
    };
    static async createEmployee(name:string, position:string, email:string){
        try {
          const response = await axios.post('http://localhost:4000/api/employee', {
            name,
            position,
            email
          });
          console.log(response.data);
          window.location.reload();
        } catch (error) {
          console.error(error);
        }
    };
  }