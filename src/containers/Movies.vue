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

    methods: {
        handleSerach(searchParams) {
            this.search(searchParams)
        },

        async search({title, type}) {
            const movies = await moviesServices.search(title, type);

            this.movies = movies;
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