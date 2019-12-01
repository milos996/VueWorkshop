<template>
    <div class="row">
        <movies-list :movies="movies"/>
        <search-movie-form @search="handleSerach"/>
    </div>
</template>

<script>
import MoviesList from '../components/MoviesList'
import SearchMovieForm from '../components/SearchMovieForm'
import moviesServices from '../services/movies'

export default {
    components: {
        MoviesList,
        SearchMovieForm
    },

    data() {
        return {
            movies: []
        }
    },

    async created() {
        try {
        console.log('created HOOK');

        const movies =  await moviesServices.getMovies();
        console.log(movies);

        console.log('FINISHED GETING DATA');

        this.movies = movies;
        } catch (e) {
            console.log('Catch', e);

            this.movies = [];
            alert(e.message)
        }

    },

    mounted() {
        console.log("I'm in mounted hook");

    },

    methods: {
        handleSerach(searchParams) {
            this.search(searchParams)
        },

        search() {

        }
    }
}
</script>

<style>
 .row {
     flex: 1;
     flex-direction: row;
     display: flex;
 }
</style>