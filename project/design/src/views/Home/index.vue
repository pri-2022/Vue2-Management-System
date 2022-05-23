<template>
  <div>
    首页
    <el-button type="primary" @click="toLogin">login</el-button>
    <el-button type="primary" @click="categoryList">data</el-button>
    <el-button type="primary" @click="t1">mock</el-button>
  </div>
</template>

<script>
import { reqCategoryList} from "@/api";
import { reqtitle } from '@/mock'
export default {
  methods: {
    toLogin() {
      this.$router.push({ name: "login" });
    },
    async categoryList() {
      let result = await reqCategoryList();
      console.log(result);
    },
    async t1(){
      let result = await reqtitle();
      console.log(result,"1111")
    }
  },
};
</script>

<style>
</style>