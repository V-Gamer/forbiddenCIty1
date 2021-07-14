<template>
  <div>
    <header1>
      <div slot="headTitle" class="headTitle">
        <input type="text" class="search" placeholder="故宫口红">
      </div>
    </header1>
  </div>
</template>

<script>
import header1 from '../../components/head/index.vue'

export default {
  name:'classification',
  components:{
    header1,
  }  
}
</script>

<style src="../../assets/css/classification/classification.css" scoped></style>