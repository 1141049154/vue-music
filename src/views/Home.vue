<template>
  <div class="home">
    <el-container style="height: 700px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>发现音乐</template>
        <el-menu-item-group>
          
          <el-menu-item index="1-1">推荐</el-menu-item>
          <el-menu-item index="1-2">排行榜</el-menu-item>
        </el-menu-item-group>
        
          <el-menu-item index="1-3">歌单</el-menu-item>
        
        <el-submenu index="1-4">
          <template slot="title">歌手</template>
          <el-menu-item index="1-4-1">华语男歌手</el-menu-item>
          <el-menu-item index="1-4-1">华语女歌手</el-menu-item>
        </el-submenu>

      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>我的音乐</template>
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
        <template slot="title"><i class="el-icon-setting"></i>设置</template>
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
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <input type="text" v-text="nihao">
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
    
    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="" label="全选" width="60">
        </el-table-column>
        <el-table-column prop="songname" label="歌名" width="140">
        </el-table-column>
        <el-table-column prop="singer" label="歌手" width="120">
        </el-table-column>
        <el-table-column prop="time" label="时长" width="120">
        </el-table-column>
        <el-table-column prop="zhuanji" label="专辑" width="120">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</el-container>

  </div>
</template>

<script>



export default {
  name: 'Home',
  components: {
    
  },
  data() {
      const item = {
        songname: '认真的雪',
        singer: '薛之谦',
        time: '3：44',
        zhuanji:'想你'
      };
      return {
        tableData: Array(30).fill(item)
      }
    }

}
</script>
<style scoped>
 .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>