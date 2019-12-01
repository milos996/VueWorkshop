<template>
    <li>
        <p>Title: {{ movie.Title}}</p> <br/>
        <p>Year: {{ movie.Year}}</p> <br/>
        <p>Relased date: {{ movie.Released}}</p> <br/>
        <p>Director: {{ movie.Director}}</p> <br/>
        <img :src="movie.Poster"/>
    </li>
</template>

<script>
export default {
    props: {
        movie: {
            type: Object,
            required: true,
            default: (() => {})
        }
    }
}
</script>