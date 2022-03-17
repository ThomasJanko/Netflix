import axios from 'axios';

const URL = "https://api.themoviedb.org/3";
const API_KEY = '?api_key=b68b1913935ab2f86c26f56fae79a784';



export default{
    
    getMovies (){
       return axios.get(`${URL}/discover/movie${API_KEY}`)
        .then((res)=>res)
        .catch(err=>console.log(err))
    },

    getMovie(id){
       return axios.get(`/${id}`)
       .then(res=>res)
       .catch(err=>console.log(err))
    },

    getPopularMovies(){
        return axios.get(`${URL}/movie/popular${API_KEY}`)
        .then(res => res)
        .catch(err => console.log(err))
    },
    getLatestMovies(){
        return axios.get(`${URL}/movie/latest${API_KEY}`)
        .then(res => res)
        .catch(err => console.log(err))
    }

    
}