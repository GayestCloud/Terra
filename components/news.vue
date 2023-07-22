<script setup>

import news from '/assets/data/news.json';

</script>

<template>
    <div id="container">
        <div class="news-entry" v-for="entry in news">
            <div class="date">{{ entry.date }}</div>
            <p>{{ entry.content }}</p>
        </div>
    </div>
</template>

<style scoped>
    #container {
        display: flex;
        flex-direction: column-reverse;
    }
    .date {
        font-size: 12px;
        margin-bottom: -10px;
        font-size: 12px;
    }

    p {
        margin-bottom: 30px;
    }
</style>