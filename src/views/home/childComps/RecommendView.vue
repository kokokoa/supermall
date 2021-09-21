<template>
  <div class="recommend">
    <div v-for="(item,key) in recommends" :key="key" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props:{
  recommends: {
    type: Array,
    default(){
      return []
    } 
  }   
  },
}
</script>

<style>
  .recommend {
    display: flex;
    text-align: center;
    font-size: 15px;
    padding: 10px 0px 15px;
    border-bottom: 5px solid #eee;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend-item img {
    width: 70px;
    padding-bottom: 6px;
  }
</style>  