console.log('Kappa')

const { createApp } = Vue;

createApp({
  data() {
    return {
      emails: [],
    //   test: `
    //     {
    //         "success":true,
    //         "response": "prova@gmail.com"
    //     }
    //   `,
    //   test2: 'L\'allarme'
    }
  },
  methods: {
    fetchEmails(){
        for (i=0; i < 10 ;i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res)=>{
                console.log(res);
                const email = res.data.response
            // tengo il console log solo perche' e' un esercizio
                console.log(res.data); 
                // pusho ogni email nell' array emails
                this.emails.push(email)
        })
        }
    }

  },
  created(){
    this.fetchEmails()             
  },
  mounted(){
    // console.log('Vue OK')
    // console.log(this.test2);
    // console.log(JSON.parse(this.test));
  }
}).mount('#app')