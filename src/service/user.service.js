import axios from 'axios';


export default{
    
    register(form){
       return axios.post("http://localhost:1337/api/auth/local/register", form)
        .then(res=>res.json())
        .catch(err=>console.log(err))
    },

    login(form){
       return axios.post('http://localhost:1337/api/auth/local', form)
        h(err=>console.log(err))
    }
}