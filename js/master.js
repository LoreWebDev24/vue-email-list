console.log('Kappa')

const { createApp } = Vue;

createApp({
  data() {
    return {
      emails: [],
    }
  },
  methods: {
    fetchEmails(){
        for (i=0; i < 10 ;i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res)=>{
                const email =  res.data.response
            // tengo il console log solo perche' e' un esercizio
                console.log(email) 
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
  }
}).mount('#app')