<template>
  <div class="container">
    <div class="list" ref="getList">
      <ul>
        <li v-for="index in list" :class="'list-'+index" ref="getLiGroup">
          <img>
        </li>
      </ul>
      <div class="img-move" ref="getMove">
        <img src="#">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: 10
    }
  },
  methods: {
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    getLiPosition() {
      let getLiGroup = this.$refs.getLiGroup
      let arr = []
      getLiGroup.forEach((item, index) => {
        let obj = {}
        obj.top = item.offsetTop
        obj.left = item.offsetLeft
        arr[index] = obj
      })
      return arr
    },
    getMovePosition() {
      let random=Math.random()
      let getList = this.$refs.getList
      let getMove = this.$refs.getMove
      let width=Math.floor(getList.offsetWidth*random)
      let height=Math.floor(getList.offsetHeight*random)
      getMove.style.top=height
      getMove.style.left=width
    }
  },
  created() {
    // console.log(this.getRandomInt(1, 2))
    setTimeout(() => {
      this.getMovePosition()
    }, 20)
  }
}

</script>
<style scoped>
@import 'sign.css'

</style>
