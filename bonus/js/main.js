// creo variabile per vue
const { createApp } = Vue;

createApp({
    data() {
        return {

            // creo proprietà per ricerca contatto 
            searchContact: "",

            // oggetto per immagine e nome profilo
            userProfile : {
                name: 'Ludovico',
                avatar: './img/imgprofilo.jpg'
            },

            // struttura dati
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/img1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/img2.webp',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/img3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/img4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/img5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/img6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/img7.webp',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/img8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],

            // creo proprietà per chat da visualizzare
            activeChat: 0,

            // creo oggetto per nuovo messaggio 
            newMessage : {
                message: '',
                status: 'sent'
            },

            // creo oggetto per risposta automatica
            autoResponseMessage: {
                message: 'ok',
                status: 'received'
            },

            // creo array per valori cercati
            filteredContact: [],
            
            // proprietà per visualizzare dropdown
            dropdownOpen: false,

        }
    },

    methods: {
        // funzione per click su contatto e mostrare chat
        showChat(currentChat) {
            this.activeChat = currentChat;
            
        },

        // funzione per risposta automatica
        autoResponse() {
            this.filteredContact[this.activeChat].messages.push(this.autoResponseMessage);
        },

        // funzione per aggiungere messaggio 
        addMessage() {
            // // creo oggetto da pushare in array
            const clonedNewMessage = { ...this.newMessage};

            // // pusho il nuovo oggetto
            this.filteredContact[this.activeChat].messages.push(clonedNewMessage);

            // timeout per risposta automatica
            setTimeout(this.autoResponse, 1000);
        },

        // creo funzione per ricerca contatti
        filterSearch() {
            
            // vedo se nei nomi degli oggetti sono compresi i caratteri scritti nella barra di ricerca e opero sul nuovo array
            this.filteredContact = this.contacts.filter(contact =>
                contact.name.toLowerCase().includes(this.searchContact.toLowerCase())
            );

            console.log(this.filteredContact);
        },

        // funzione per vedere dropdown
        openMenu(indice) {
            this.dropdownOpen = !this.dropdownOpen
           
            console.log(this.dropdownOpen);
        }
        
    },

    // se non viene fatta nessuna ricerca i due array coincidono così da mostrare tutte le chat 
    created() {
        this.filteredContact = this.contacts
    }
}).mount("#app");