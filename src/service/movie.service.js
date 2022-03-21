import axios from 'axios';

const URL = "https://api.themoviedb.org/3";
const API_KEY = '?api_key=b68b1913935ab2f86c26f56fae79a784';
const page = 1 + (Math.random() * (40-1))



export default{
    
    getMovies (){
       return axios.get(`${URL}/discover/movie${API_KEY}&page=${page}`)
        .then((res)=>res)
        .catch(err=>console.log(err))
    },

    getMovie(id){
       return axios.get(`http://api.themoviedb.org/3/movie/${id}/videos${API_KEY}&append_to_response=videos`)
       .then(res=>res)
       .catch(err=>console.log(err))
    },
    //&append_to_response=videos

    getRatedMovies(){
        return axios.get(`${URL}/movie/top_rated${API_KEY}&page=${page}`)
        .then(res => res)
        .catch(err => console.log(err))
    },
    
    getLatestMovies(){
        return axios.get(`${URL}/movie/latest${API_KEY}`)
        .then(res => res)
        .catch(err => console.log(err))
    },

    getUpcomingMovies(){
        return axios.get(`${URL}/movie/upcoming${API_KEY}&page=${page}`)
        .then(res => res)
        .catch(err => console.log(err))
    },

    getRecommandationMovies(id){
        return axios.get(`${URL}/movie/${id}/recommendations${API_KEY}&language=en-US&page=${page}`)
        .then(res => res)
        .catch(err => console.log(err))

    }

    
}