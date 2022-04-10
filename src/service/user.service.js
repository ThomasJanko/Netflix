import axios from 'axios';
import { uid } from 'rand-token';

const token = uid(30);


export default{
    
    register(form){
       return axios.post("http://localhost:1337/api/auth/local/register", form)
        .then(res=>res.json())
        .catch(err=>console.log(err))
    },

    login(form){
        let log;
       if((form.identifier == "user@netflix.com") && (form.password=="netflix")){
          log = {auth: true, token: token}
    
       }
       else {
           log= {auth: false, token:""}
       }
       return localStorage.setItem('Login',JSON.stringify(log))
    }
}