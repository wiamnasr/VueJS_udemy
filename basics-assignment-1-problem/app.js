const app = Vue.createApp({
  data() {
    return {
      name: 'Wiam',
      age: 31,
      favNum: Math.random(),
      imgUrl:
        'https://images.unsplash.com/photo-1615796153287-98eacf0abb13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    };
  },
  methods: {
    getAgeIn5Years() {
      return this.age + 5;
    },
  },
});

app.mount('#assignment');
