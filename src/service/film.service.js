import axios from 'axios';


export default{
    
    getFilms(){
       return axios.get("")
        .then(res=>res.json())
        .catch(err=>console.log(err))
    },

    getFilm(id){
       return axios.get(`/${id}`)
       .then(res=>res.json())
       .catch(err=>console.log(err))
    }
}