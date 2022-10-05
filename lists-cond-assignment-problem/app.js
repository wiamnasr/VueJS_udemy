const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      userEnteredTask: '',
      showTasks: true,
    };
  },
  methods: {
    addNewTask() {
      this.tasks.push(this.userEnteredTask);
      this.userEnteredTask = '';
    },
    toggleList() {
      this.showTasks = !this.showTasks;
    },
    deleteTaskEntry(i) {
      this.tasks.splice(i, 1);
    },
  },
  computed: {},
});

app.mount('#assignment');
