<template>
  <div id="tab-bar">
    
   <slot></slot>

  </div>
</template>

<script>
export default {

}
</script>

<style>
#tab-bar {
    display: flex;
    position: fixed;
    background: #fff;
    bottom: 0px;
    /* top: 0px; */
    left: 0px;
    right: 0;
    box-shadow: 0px -1px 1px rgba(100, 100, 100, .2);
    
    }
     
 
</style>