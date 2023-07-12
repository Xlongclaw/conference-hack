import axios from 'axios';
async function getDataModule (endpoint:string){
const response = await axios.get(`https://conference.cyclic.app/${endpoint}`, {
  headers: {
    'accept': 'application/json',
    'Authorization': 'D9kN4A'
  }
});
console.log(response.data[0]);

return response.data[0];
}
export default getDataModule