<template>
  <el-table :data="listData">
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="name" label="名称" align="center" width="100"></el-table-column>
      <el-table-column prop="date" label="日期" align="center" width="120"></el-table-column>
      <el-table-column prop="description" label="描述" align="center" v-if="descriptionFlag"></el-table-column>
      <el-table-column prop="content" label="内容" align="center" v-if="contentFlag"></el-table-column>
      <el-table-column label="状态" align="center" width="100">
          <template #default="scope">
              <el-tag v-if="scope.row.status === 1" type="success">已解析</el-tag>
              <el-tag v-else type="danger">解析中</el-tag>
          </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="150">
          <template #default="scope">
              <el-button type="primary" size="small">查看</el-button>
              <el-button type="warning" size="small" @click="deleteItem(scope.$index)">删除</el-button>
          </template>
      </el-table-column>
  </el-table>
    <div class="footer">
        <el-pagination background layout="prev, pager, next" :total="100" style="float: left;"></el-pagination>
        <div style="float: right;">
            <slot>
                <UploadMaterial />
            </slot>
        </div>

    </div>
</template>

<script setup>
import { reactive } from "vue";
import UploadMaterial from "@/components/UploadMaterial.vue";


const props = defineProps({
  listData: {
    type: Array,
    default: () => []
  },
    descriptionFlag: {
        type: Boolean,
        default: true
    },
    contentFlag: {
        type: Boolean,
        default: false
    }
})

const listData = reactive(props.listData)

const deleteItem = (index) => {
    listData.splice(index, 1)
}


</script>

<style scoped>
.footer {
    margin-top: 16px;
}
</style>