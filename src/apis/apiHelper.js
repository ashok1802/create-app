import axios from 'axios';

const apiHelper = (method, url, data) => {
  return axios({
    method,
    url,
    data: {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }
  });
}

export default apiHelper;