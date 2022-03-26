const app = Vue.createApp({
    data() {
      return {
        counter: 0,
        name: '',
        confirmedName: ''
      };
    },
    methods: {
      confirmedInput(){
        this.confirmedName = this.name;
      },
      submitForm(){
        alert('Submitted!');
      },
      setName(event){
        this.name = event.target.value; 
      },
        add(n){
           this.counter+=n; 
        },
        reduce(n){
            this.counter-=n;
        }
    }
  });
  
  app.mount('#events');
  