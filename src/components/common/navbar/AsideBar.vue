<template>
   <el-aside width="200px" style="background-color: rgb(238, 241, 246);height: 700px">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"  @click="homeclick"><i class="el-icon-message" >发现音乐</i></template>
        <el-menu-item-group>
          
          <el-menu-item index="1-1" @click="recommendclick">推荐</el-menu-item>
          <el-menu-item index="1-2" @click="rankclick" >排行榜</el-menu-item>
        </el-menu-item-group>
        
          <el-menu-item index="1-3">歌单</el-menu-item>
        
        <el-submenu index="1-4">
          <template slot="title">歌手</template>
          <el-menu-item index="1-4-1">华语男歌手</el-menu-item>
          <el-menu-item index="1-4-1">华语女歌手</el-menu-item>
        </el-submenu>

      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu">我的音乐</i></template>
        <el-menu-item-group>
          
          <el-menu-item index="2-1">我喜欢的</el-menu-item>
          <el-menu-item index="2-2">收藏夹1</el-menu-item>
        </el-menu-item-group>
        
          <el-menu-item index="2-3">收藏夹2</el-menu-item>
        
        <el-submenu index="2-4">
          <template slot="title">收藏夹3</template>
         
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting">设置</i></template>
        <el-menu-item-group>
          
          <el-menu-item index="3-1">资料设置</el-menu-item>
          <el-menu-item index="3-2">系统设置</el-menu-item>
        </el-menu-item-group>
        
          <el-menu-item index="3-3">隐私设置</el-menu-item>
      
        <el-submenu index="3-4">
          <template slot="title">个人设置</template>
          <el-menu-item index="3-4-1">基本设置</el-menu-item>
          <el-menu-item index="3-4-2">绑定设置</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>


export default {
  name: 'AsideBar',
  components: {
  
  },
  methods: {
    recommendclick(){
      this.$router.replace('/recommend')
    },
    rankclick(){
       this.$router.replace('/rank')
    },
    homeclick(){
      this.$router.replace('/home')
    }
  }
}
</script>
<style>
.el-aside {
    color: #333;  
  position: absolute;
  left: 0;
  top: 0;
  
}
  
</style>