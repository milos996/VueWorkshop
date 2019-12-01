
 class MoviesService {
    constructor() {

    }

    getMovies() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve( [
                    {
                        Id: 0,
                        Title: 'Terminator',
                        Year: '1991',
                        Released: '05 06 1991',
                        Director: 'Ben Hernandez'
                    },
                    {
                        Id: 1,
                        Title: 'Terminator 2',
                        Year: '1995',
                        Released: '05 06 1995',
                        Director: 'Ben Hernandez'
                    }
                ])

                // reject({
                //     status: 500,
                //     message: "something went"
                // })
            }, 5000);
        })
    }

}

const moviesServices = new MoviesService();

export default moviesServices;

