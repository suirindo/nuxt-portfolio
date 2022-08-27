<template>
    <div>
        <div class="hero">
            <img :src="data.image" alt="blog-image">
        </div>
        <div class="wrapper">  
            <div class="container">               
                <h1>{{ data.title }}</h1>
                <p>{{ data.date }}</p> 
                <ContentDoc />
            </div> 
        </div>
    </div> 
</template>

<script setup>
const { data } = await useAsyncData(useRoute().path, () => 
    queryContent(useRoute().path).findOne()
)
</script>