<template>
  <el-button type="primary" @click="uploadDoc">上传文本</el-button>

  <el-dialog v-model="dialogVisible" title="上传文本" width="30%">
      <el-form :model="form" ref="form" label-width="80px">
          <el-form-item label="文本名称" prop="name">
              <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="文本内容" prop="content">
              <el-input type="textarea" v-model="form.content"></el-input>
          </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitForm('form')">确 定</el-button>
      </span>
  </el-dialog>
</template>

<script setup>
import {reactive, ref} from "vue";

const dialogVisible = ref(false)
const form = reactive({
    name: "",
    content: ""
})

const submitForm = (formName) => {
    console.log(formName)
}

const uploadDoc = () => {
    dialogVisible.value = !dialogVisible.value;
}
</script>

<style scoped>

</style>