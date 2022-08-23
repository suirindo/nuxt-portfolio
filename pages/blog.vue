<template>
    <div>
    {{ data }}
    </div>

</template>

<script setup> // データの取得や操作など、このページで実行したい処理のJSコードを書く

const {data} = await useAsyncData("blogQuery", () => 
    queryContent("/blog").find() // contentフォルダ内の読み取りたいデータのパスを書く
)

</script>
