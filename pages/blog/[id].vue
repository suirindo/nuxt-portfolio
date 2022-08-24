<template>
  <div>
    <div>
        <img src="data.image" alt="blog-image">
    </div>
    <div>
        <div>
            <h1>{{data.title}}</h1>
            <p>{{data.date}}</p>
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