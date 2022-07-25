const axios = require('axios');

class REST { 
    post = (path, body) => {
        // Make POST call
        return axios.post(`${process.env.URL}${path}`, body)
            .catch(error =>{
                return error;
            });
    
    } 
    get = (path) => {
        // Make GET call
        return axios.get(`${process.env.URL}${path}`)
            .catch(error =>{
                return error;
            });
    
    }
     
    put = (path, body) => {
        // Make PUT call
        return axios.put(`${process.env.URL}${path}`, body)
            .catch(error =>{
                return error;
            });
    }

    delete = (path, body) => {
        // Make DELETE call
        return axios.delete(`${process.env.URL}${path}`, {data: body})
            .catch(error =>{
                return error;
            });
    } 
}

module.exports = {REST};
