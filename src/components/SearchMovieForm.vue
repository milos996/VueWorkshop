<template>
    <div>
        <label for="title">Title</label>
        <input type="text" name="title" v-model="title"><br>

        <label for="type">Type</label>
        <select name="type" @change="handleTypeChange" :value="selectedType">
            <option value="movie">Movie</option>
            <option value="series">Series</option>
            <option value="episode">Episode</option>
        </select>

        <button @click="search">Search</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            selectedType: 'movie'
        }
    },

    methods: {
        handleTypeChange(event) {
            this.selectedType = event.target.value
        },

        search() {
            this.$emit('search', {
                title: this.title,
                type: this.selectedType
            })
        }
    }
}
</script>