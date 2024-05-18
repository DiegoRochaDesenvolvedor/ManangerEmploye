import axios from 'axios';
export default class Controller {
    static async putData(id: string, name: string, position: string, email: string) {
        console.log('id:',id)
        console.log('name:',name)
        console.log('position:',position)
        console.log('email:',email)
    try {
      const response = await axios.put(`http://localhost:4000/api/update-employee/${id}`, {
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
          const response = await axios.delete(`http://localhost:4000/api/delete-employee/${id}`);
          window.location.reload();
          return response.data;
        } catch (error) {
          console.error(error);
        }
      };
  }