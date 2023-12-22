const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            firstName: 'Alessio',
            lastName: 'Vietri',
            age: 32,
            wearsGlasses: true,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, repellendus?',
            favPkmn: 'squ',
            pClasses: 'lightcoral bold bordered'
        }
    },
    methods: {
        getPClasses() {
            return 'py-4 bg-success';
        },
        sayHi() {
            alert('Ciao user!');
        },
        printTextInConsole() {
            console.log(this.text);
            console.log(this.getPClasses());
        }
    }
}).mount('#app');