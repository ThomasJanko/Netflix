import axios from 'axios';

const API_KEY = '?api_key=b68b1913935ab2f86c26f56fae79a784'

export default{
    
    getMovies (){
       return axios.get(`https://api.themoviedb.org/3/discover/movie${API_KEY}`)
        .then((res)=>res)
        .catch(err=>console.log(err))
    },

    getMovie(id){
       return axios.get(`/${id}`)
       .then(res=>res)
       .catch(err=>console.log(err))
    },

    getPopularMovies(){
        return axios.get(`https://api.themoviedb.org/3/movie/popular${API_KEY}`)
        .then(res => res)
        .catch(err => console.log(err))
    },
    getLatestMovies(){
        return axios.get(`https://api.themoviedb.org/3/movie/latest${API_KEY}`)
        .then(res => res)
        .catch(err => console.log(err))
    }

    
}