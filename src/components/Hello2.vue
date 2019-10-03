<template>
  <div class="hello container mt-5">
    <h1>{{ msg }}</h1>
    <h2>Hello2</h2>

    <!-- input-group物件 -->
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="請輸入要送出的訊息"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        v-model="message_input"
      />
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" @click="submitMessage()" type="button" id="button-addon2">傳送</button>
      </div>
    </div>

    <!-- media物件 -->
    <div class="media mt-5" v-for="item in messages">
      <img v-if="item.username == username" class="align-self-start mr-3" src="http://lorempixel.com/100/100/sports" alt="Generic placeholder image">
      <div class="media-body">
        <h5 class="mt-0">{{item.username}}</h5>
        <p>{{item.message}}</p>
      </div>
      <img v-if="item.username != username" class="align-self-start mr-3" src="http://lorempixel.com/100/100/sports" alt="Generic placeholder image">
    </div>

    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      username: "Alice",
      message_input: "",
      messages: [
        {
          username: "Alice",
          message: "Hello妳好"
        },
        {
          username: "Bob",
          message: "KING of the World"
        }
      ]
    };
  },

  methods: {
    submitMessage(){
      let vm = this

      // console.log(vm.message)
      vm.messages.unshift({
        username: vm.username,
        message: vm.message_input
      })
      vm.message_input = ""
    }
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
