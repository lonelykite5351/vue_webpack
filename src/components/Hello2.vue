<template>
  <div class="hello container">
    <h1>{{ msg }}</h1>
    <h2>Hello2</h2>

    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
      </div>
    </div>

    <div class="media my-5" v-for="item in messages">
      <img v-if="item.username == username" src="http://lorempixel.com/100/100/sports" class="align-self-start mr-3" alt="..." />
      <div class="media-body">
        <h5 class="mt-0">{{item.username}}</h5>
        <p>{{item.message}}</p>
      </div>
      <img v-if="item.username != username" src="http://lorempixel.com/100/100/sports" class="align-self-start mr-3" alt="..." />
    </div>

    <!-- <div class="media">
      <div class="media-body">
        <h5 class="mt-0 mb-1">Media object</h5>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </div>
      <img src="http://lorempixel.com/100/100/sports" class="ml-3" alt="..." />
    </div> -->

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
      username: 'Alice',
      messages: [
        {
          username: 'Alice',
          message: 'Hello妳好'
        },
        {
          username: 'Bob',
          message: 'KING of the World',
        }
      ]
    };
  }
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
