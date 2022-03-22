const app = Vue.createApp({
    data() {
      return {
        counter: 0,
      };
    },
    methods: {
        add(n){
           this.counter+=n; 
        },
        reduce(n){
            this.counter-=n;
        }
    }
  });
  
  app.mount('#events');
  