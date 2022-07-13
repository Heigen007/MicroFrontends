<template>
    <div>
        <input type="text" v-model="text">
        <button @click="sendMessageToIframe">Отправить в iframe</button>
        <br>
        <div>data: {{ data }}</div>
        <br>
        <iframe
            id="HomePageIframe"
            title="Iframe Example"
            style="width: 100%; height: 70vh"
            src="http://localhost:8001/"
        >
        </iframe>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: '',
            data: ''
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
        sendMessageToIframe() {
            const iframe = document.getElementById('HomePageIframe');
            iframe.contentWindow.postMessage(this.text, 'http://localhost:8001/');
        }
    }
}
</script>