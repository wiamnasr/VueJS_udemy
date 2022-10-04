const app = Vue.createApp({
  data() {
    return {
      numbersSum: 0,
    };
  },
  methods: {
    addNumber(num) {
      this.numbersSum = this.numbersSum + num;
    },
  },
  computed: {
    additionResult() {
      if (this.numbersSum === 37) return 37;

      if (this.numbersSum < 37) return `Not there yet: ${this.numbersSum}`;

      return 'Too much!';
    },
  },
  watch: {
    numbersSum() {
      setTimeout(() => {
        this.numbersSum = 0;
      }, 5000);
    },
  },
});

app.mount('#assignment');
