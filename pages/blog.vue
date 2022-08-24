<template>
    <div>
        <div>
            <h1>Blog</h1>
            <p>エンジニアブログ</p>
            <div v-for = "singleData in data" :key="singleData.id">
              <div>
                <h3>{{ singleData.title }} </h3>
                <p>{{singleData.excerpt }}  </p>
                <p>{{singleData.date }}  </p>
            </div>
            <div>
                <img src="singleData.image" alt="blog-image">
            </div>
         </div>
    </div>
    </div>
</template>

<script setup> // データの取得や操作など、このページで実行したい処理のJSコードを書く

const { data } = await useAsyncData("blogQuery",()=>
    queryContent("/blog").find())

</script>
