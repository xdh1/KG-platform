<template>
      <el-container>
          <el-aside width="200px">
              <el-menu :default-active="activeIndex" router>
                  <el-menu-item index="query">图谱查询</el-menu-item>
                  <el-menu-item index="material">教案解析</el-menu-item>
                  <el-menu-item index="doc">文本解析</el-menu-item>
<!--                  <el-menu-item index="3">Menu 3</el-menu-item>-->
              </el-menu>
          </el-aside>
          <el-main>
              <RouterView />
          </el-main>
      </el-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import router from "@/router";


const activeIndex = ref("query");

const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
}

onMounted(() => {
    activeIndex.value = router.currentRoute.value.path.split("/")[1] || "query";
})

</script>

<style scoped>
.el-menu-item.is-active {
    color: #409EFF;
    background-color: #ecf5ff !important;
    border-bottom: 2px solid #409EFF;
    font-weight: 600;
}

</style>

