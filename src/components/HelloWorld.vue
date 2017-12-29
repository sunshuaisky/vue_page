<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li v-for="MPage_arr in MPage_arrs" @click="Tpage(MPage_arr)">{{ MPage_arr }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      MPage_arrs: []
    }
  },
  mounted: function () {
    this.Tpage('1');
  },
  methods: {
    Tpage: function(pages){
      let MPage_arr = this.page(pages,10,5,4,1,3,1,1);
      this.MPage_arrs = MPage_arr;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
