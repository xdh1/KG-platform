<template>
  <el-row>
      <el-col :span="24" style="text-align: center">
          <el-space wrap>
              <el-input
                      v-model="queryContent"
                      placeholder="请输入查询内容"
                      style="width: 300px;"
              >
              </el-input>
              <el-button type="primary">查询</el-button>
          </el-space>

      </el-col>
      <el-col :span="24">
          <div class="kg-iframe">
              <p>图谱展示区域</p>
          </div>

      </el-col>

  </el-row>

</template>

<script setup>
import { ref, onMounted } from "vue";


const queryContent = ref("")

</script>

<style scoped>
.kg-iframe {
    width: 800px;
    height: 500px;
    border: none;
    background: #DCDFE6;
    margin: 16px auto;
    text-align: center;
}

</style>