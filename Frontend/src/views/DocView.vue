<template>
    <List :list-data="listData" :content-flag="true" :description-flag="false">
        <UploadDoc />
    </List>
</template>

<script setup>
import { reactive } from "vue";
import List from "@/components/List.vue";
import UploadDoc from "@/components/UploadDoc.vue";


const listData = reactive([
    {
        "name": "张三",
        "date": "2021-01-01",
        "content": "这是一段内容",
        "status": 1
    },
    {
        "name": "张三",
        "date": "2021-01-01",
        "content": "这是一段内容",
        "status": 1
    },
    {
        "name": "张三",
        "date": "2021-01-01",
        "content": "这是一段内容",
        "status": 1
    },
    {
        "name": "张三",
        "date": "2021-01-01",
        "content": "这是一段内容",
        "status": 1
    },
    {
        "name": "张三",
        "date": "2021-01-01",
        "content": "这是一段内容",
        "status": 0
    },
    {
        "name": "张三",
        "date": "2021-01-01",
        "content": "这是一段内容",
        "status": 0
    },
    {
        "name": "张三",
        "date": "2021-01-01",
        "content": "这是一段内容",
        "status": 0
    },
    {
        "name": "张三",
        "date": "2021-01-01",
        "content": "这是一段内容",
        "status": 0
    },
])
</script>

<style scoped>

</style>