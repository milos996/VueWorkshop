import axios from 'axios'
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
         await this.apiClient.get('?i=tt3896198&apikey=f915e4d&s=terminator');
        return data.Search;
    }

}

const moviesServices = new MoviesService();

export default moviesServices;

