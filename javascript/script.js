/**
 * Descrizione:
 * 
 * Rifacciamo l'esercizio della toDoList come fatto assieme in classe, suddividendo i nostri -milestone- principalmente in questi step:
 * - Stampare in pagina un item per ogni elemento contenuto in un array
 * - Ogni item ha una icona "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
 * - Predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante,
 *   il testo digitato sarà aggiunto alla lista
*/

let root = new Vue (
    {
        el: "#root",

        data: {

            toDoList: [ "pane", "latte", "uova", "formaggio", "insalata", "pomodori", "melanzane", "zucchine", "carciofi", "mele", "pere", "cocomero", "melone", "uva", "vino", "carne", "pesce", "funghi", "fagioli", "ceci"],
            
        },

        methods: {

            deleteListElement: function(element){
                this.toDoList.splice(element, 1);
            }

        },
    }
);

