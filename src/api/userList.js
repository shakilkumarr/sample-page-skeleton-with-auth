import axios from 'axios';

export const getUserList = () =>
  axios.get('https://randomuser.me/api/?results=50')
    .then(({ data }) => data.results);