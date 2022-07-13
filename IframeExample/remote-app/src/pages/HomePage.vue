<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>data: {{ data }}</div>
    <br>
    <input type="text" v-model="text">
    <button @click="sendMessageToParent">Отправить в Родитель</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      data: '',
      text: ''
    }
  },
  mounted(){
    window.addEventListener("message", (event) => {
      if(typeof event.data == "object") return

      this.data = event.data

      // можно отправить сообщение обратно с помощью event.source.postMessage(...)
    });
  },
  methods: {
    sendMessageToParent() {
      window.top.postMessage(this.text, '*');
    }
  }
}
</script>