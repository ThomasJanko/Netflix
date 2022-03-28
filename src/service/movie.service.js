import axios from 'axios';

const URL = "https://api.themoviedb.org/3";
const API_KEY = '?api_key=b68b1913935ab2f86c26f56fae79a784';
const page = 1 + (Math.random() * (20-1))

const genres= {
    action: "&with_genres=28",
    adventure: "&with_genres=12",
    animation: "&with_genres=16",
    comedy: "&with_genres=35",
    crime: "&with_genres=80",
    documentary: "&with_genres=99",
    drama: "&with_genres=18",
    family: "&with_genres=10751",
    fantasy: "&with_genres=14",
    history: "&with_genres=36",
}



export default{
    
    //Retourne tous les films
    async getMovies (){
       return axios.get(`${URL}/discover/movie${API_KEY}&page=${page}${genres.adventure}`)
        .then((res)=> res)
        .catch(err=>console.log(err))
    },


    //Retourne 1 film avec sa vidéo
    async getMovie(id){
       return axios.get(`http://api.themoviedb.org/3/movie/${id}/videos${API_KEY}&append_to_response=videos`)
       .then(res=>res)
       .catch(err=>console.log(err))
    },
    
    //Retourne les filmsles plus aimés
    async getRatedMovies(){
        return axios.get(`${URL}/movie/top_rated${API_KEY}&page=${page}`)
        .then(res => res)
        .catch(err => console.log(err))
    },
    
    //Retourne les derniers films
    async getLatestMovies(){
        return axios.get(`${URL}/movie/latest${API_KEY}`)
        .then(res => res)
        .catch(err => console.log(err))
    },

    //Retourne les nouveau films
    async getUpcomingMovies(){
        return axios.get(`${URL}/movie/upcoming${API_KEY}&page=${page}`)
        .then(res => res)
        .catch(err => console.log(err))
    },

    //Retourne les films recommandés
    async getRecommandationMovies(id){
        return axios.get(`${URL}/movie/${id}/recommendations${API_KEY}&language=en-US&page=${page}`)
        .then(res => res)
        .catch(err => console.log(err))

    },

    //Retourne la liste des genres
    async getGenres(){
        return axios.get(`${URL}/genre/movie/list${API_KEY}&language=en-US&page=${page}`)
        .then(res => res)
        .catch(err => console.log(err))

    },

    //Retourne par genre
    async getByGenre (id){
        return axios.get(`${URL}/discover/movie${API_KEY}&page=${page}&with_genres=${id}`)
         .then((res)=> res)
         .catch(err=>console.log(err))
     },

    
}