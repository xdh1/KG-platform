<template>
  <List :listData="ListData" />
</template>

<script setup>
import List from "@/components/List.vue";

const ListData = [
    {
        name: "张三",
        date: "2021-01-01",
        description: "这是一段描述",
        status: 1
    },
  {
    name: "李四",
    date: "2021-01-01",
    description: "这是一段描述",
      status: 1
  },
  {
    name: "王五",
    date: "2021-01-01",
    description: "这是一段描述",
      status: 1
  },
  {
    name: "赵六",
    date: "2021-01-01",
    description: "这是一段描述",
      status: 1
  },
  {
    name: "田七",
    date: "2021-01-01",
    description: "这是一段描述",
      status: 1
  },
  {
    name: "孙八",
    date: "2021-01-01",
    description: "这是一段描述",
      status: 1
  },
  {
    name: "周九",
    date: "2021-01-01",
    description: "这是一段描述",
      status: 0
  },
  {
    name: "吴十",
    date: "2021-01-01",
    description: "这是一段描述",
      status: 0
  },
  {
    name: "郑十一",
    date: "2021-01-01",
    description: "这是一段描述",
      status: 0
  },
  {
    name: "王十二",
    date: "2021-01-01",
    description: "这是一段描述",
      status: 0
  },
  {
    name: "李十三",
    date: "2021-01-01",
    description: "这是一段描述",
      status: 0
  },
  {
    name: "张十四",
    date: "2021-01-01",
    description: "这是一段描述",
      status: 0
  },
  {
    name: "刘十五",
    date: "2021-01-01",
    description: "这是一段描述",
      status: 0
  },
  {
    name: "陈十六",
    date: "2021-01-01",
    description: "这是一段描述",
      status: 0
  }
];

</script>

<style scoped>

</style>