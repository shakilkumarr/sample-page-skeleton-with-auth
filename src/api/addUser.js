import axios from 'axios';

export const addUser = (data) => axios.post('https://jsonplaceholder.typicode.com/posts', data)
  .then(response => {
    console.log(response);
    if(response.status === 200){
      alert('userInfo data submitted successfully');
    }
    return response;
  })
  .catch(error => {
    console.error('There was an error!', error);
  });