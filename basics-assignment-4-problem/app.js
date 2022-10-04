const app = Vue.createApp({
  data() {
    return {
      userInputClass: '',
      show: true,
      userInlineStyle: '',
    };
  },
  methods: {
    toggleUserInputParagraph() {
      console.log('inside toggleuserinputparagraph: ');
      this.show = !this.show;
    },
  },
});

app.mount('#assignment');
