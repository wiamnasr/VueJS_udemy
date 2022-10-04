app = Vue.createApp({
  data() {
    return {
      userInput: '',
      registeredInput: '',
    };
  },
  methods: {
    showAlert() {
      console.log('clicked!');
      alert('this is an Alert');
    },
    registerUserInput(event) {
      this.userInput = event.target.value;
    },
    showRegisteredInput() {
      this.registeredInput = this.userInput;
    },
  },
});

app.mount('#assignment');
