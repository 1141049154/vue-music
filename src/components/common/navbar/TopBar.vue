<template>
 <el-header style="text-align: right; font-size: 12px">
  <el-breadcrumb separator-class="el-icon-arrow-right" class="nav-home">
  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
 </el-breadcrumb>
      <input type="text">
      <button>搜索</button>
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
</template>

<script>


export default {
  name: 'TopBar',
  components: {
  
  }
}
</script>
<style>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    position: absolute;
    left: 200px;
    top: 0px;
    width:calc(100% - 200px); 
    
  }
  .nav-home{
    width: 30px;
    margin-top:15px;
    height: 3px;
    
  }
</style>
