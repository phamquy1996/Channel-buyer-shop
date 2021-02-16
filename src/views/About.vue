<template>
  <div class="about">
    <h1>This is an about page {{title}}</h1>
    {{title}}
    <div v-for="task in broadcastMessage" :key="task" >
      <p>{{ task.message }}</p>
    </div>
  </div>
</template>
<script>
  import SockJS from 'sockjs-client'
  import Stomp from 'stompjs'
  import { defineComponent, reactive, toRefs, computed, onMounted } from 'vue'
  var stompClient
  export default{
    setup(){
      onMounted(() => {
      connect()
    })
    const state = reactive({
      title: 'anhquy',
      description: '',
      createdBy: '',
      assignedTo: '',
      broadcastMessage:[]
    })
      const filteredTitles = computed(() => connect())
      const connect = () => {
            var socket = new SockJS('http://localhost:8082/javatechie') 
            stompClient = Stomp.over(socket);
            stompClient.connect({}, onConnected, onError);
        }
        const onError = () => {
            var socket = new SockJS('http://192.168.1.101:8082/javatechie') 
            stompClient = Stomp.over(socket);
            stompClient.connect({}, onConnected, onError);
        }
        const onConnected = () => {
          // Subscribing to the public topic
          stompClient.subscribe('/topic/pubic', onMessageReceived);
          // Registering user to server as a public chat user
          stompClient.send("/app/chat.register", {}, JSON.stringify({sender: 'anhquy', type: 'JOIN'}))
        }
        const SendMessage = (type, value) => {
          if (stompClient) {
            var chatMessage = {
              sender: username,
              content: message,
              type: 'CHAT'
            };
            // send public message
            stompClient.send("/app/chat.send", {}, JSON.stringify(chatMessage));
          }
        }
        const onMessageReceived = (payload) => {
    var message = JSON.parse(payload.body);
    
    if (message.type === 'JOIN') {
      // console.log(roomNotification)
      // roomNotification.push({ 'sender': message.sender + " ~ joined", 'status': 'online', 'dateTime': message.dateTime })
      // setRoomNotification(roomNotification)
      // setBellRing(true)
      // console.log(roomNotification)
    }
    else if (message.type === 'LEAVE') {
      roomNotification.map((notification, i) => {
        if (notification.sender === message.sender + " ~ joined") {
          notification.status = "offline";
          notification.sender = message.sender + " ~ left";
          notification.dateTime = message.dateTime;
        }
      })
      setRoomNotification(roomNotification)
     
      setBellRing(true)
    }
    else if (message.type === 'TYPING') {
      roomNotification.map((notification, i) => {
        if (notification.sender === message.sender + " ~ joined") {
          if (message.content)
            notification.status = "typing...";
          else
            notification.status = "online";
        }
      })
      setRoomNotification(roomNotification)
    }
    else if (message.type === 'CHAT') {
      console.log(1)
      // roomNotification.map((notification, i) => {
      //   if (notification.sender === message.sender + " ~ joined") {
      //     notification.status = "online";
      //   }
      // })
      state.broadcastMessage.push({
        message: message.content,
        sender: message.sender,
        dateTime: message.dateTime
      })
      // anhquy = broadcastMessage
      console.log(state.broadcastMessage)
    }
    else {
      
    }  
  }
       return { connect, onError, onConnected, SendMessage, filteredTitles, onMessageReceived, ...toRefs(state) };
    }
  }
</script>