<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot  name="item-icon"></slot></div>
    <!-- <slot> </slot> -->
    <div v-else><slot  name="item-icon-active"></slot></div>
     <div :style="styleAcrive"><slot  name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  props:{
    path: String,
    activeColor:{ 
     type: String,
     default: 'red'
    }
  },
  data(){
    return {
      // isActive: true
    }
  },
  methods:{
    itemClick(){
      console.log(this.path);
      this.$router.replace(this.path);
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1;
    },
    styleAcrive(){
      return this.isActive == true ? {color: this.activeColor} : {}
    }
  }
}
</script>

<style>
 .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 16px;
    
  }
  
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }
  .active{
    color: red;
  }
</style>