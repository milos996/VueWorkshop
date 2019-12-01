import axios from 'axios'

const QUERY_PARAMS = (title, type) => `?i=tt3896198&apikey=f915e4d&s=${title}&type=${type}`
 class MoviesService {
    constructor() {
        const instance = axios.create({
            baseURL: 'http://www.omdbapi.com/',
            headers: {Accept: 'application/json'}
        });

        this.apiClient = instance;
    }

    async getMovies() {
        const { data } =
         await this.apiClient.get(QUERY_PARAMS('terminator', 'movie'));
        return data.Search;
    }

    async search(title, type) {
        const {data} = await this.apiClient.get(QUERY_PARAMS(title, type))

        return data.Search;
    }

}

const moviesServices = new MoviesService();

export default moviesServices;

