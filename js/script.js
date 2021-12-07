// Consegna
// L’utente indica un livello di difficoltà
//  in base al quale viene generata una griglia di 
//  gioco quadrata, in cui ogni cella contiene un
//   numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella,
//  la cella cliccata si colora di azzurro.
// Consigli del giorno: 
// Facciamo prima la parte grafica a mano 
// e solo dopo passiamo allo script
// Scriviamo prima cosa vogliamo fare passo 
// passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() 
// per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli
// in un secondo momento.

/* Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. :bomba:
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati 
- abbiamo calpestato una bomba - 
la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente 
può continuare a cliccare sulle altre celle. La partita termina quando il 
giocatore clicca su una bomba o raggiunge il numero massimo possibile di 
numeri consentiti. Al termine della partita il software deve comunicare 
il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.
 */
//richiamo il container playfield

let playfield = document.querySelector('.playfield');

//creo un array di numeri casuali da 1 a 16 (bombe) senza duplicati
let bomb = [];
while(bomb.length < 16){
    let r = Math.floor(Math.random() * 100) + 1;
    if(bomb.indexOf(r) === -1) bomb.push(r);
}

console.log(bomb);


//creo un array di numeri in sequenza da 1 a 100 con 16 bombe
let array_100= [];
i = 0; 
let numero_rand = 0;
while (i < 100) {
    if(numero_rand == bomb[i]) {
        array_100.push[bomb[i]];
    } else if (numero_rand != bomb[i]){
     numero_rand += 1;
     array_100.push(numero_rand);
     i++;
}
}

console.log (array_100);



//creo un array di numeri random da 1 a 81
let array_81= [];
i = 0; 
while (i < 81) {
    let numero_rand = Math.floor(Math.random() * 81);
     array_81.push(numero_rand);
     i++;
}
console.log (array_81);

//creo un array di numeri random da 1 a 49
let array_49= [];
i = 0; 
while (i < 49) {
    let numero_rand = Math.floor(Math.random() * 49);
     array_49.push(numero_rand);
     i++;
}
console.log (array_49);

//aggiungo event listener al bottone play per visualizzare il playfield
//ciclo for all'interno che crea div e numeri in base alle difficoltà
document.querySelector(".btn-play").addEventListener("click", function() {
    playfield.classList.add("active");
    let select = document.getElementById("difficolta");
    let valore_select = select.value;
    playfield.innerHTML = "";
    console.log(valore_select);
    if(valore_select == "Easy") {
        for(i = 0; i < 100; i++) {
            let square_div = document.createElement('div');
            square_div.classList.add("square-100");
            playfield.append(square_div);
            square_div.innerHTML = array_100[i];
            square_div.addEventListener("click", function () {
                square_div.classList.add("b-yellow");
            });
        }
    } else if (valore_select == "Medium") {
        for(i = 0; i < 81; i++) {
            let square_div = document.createElement('div');
            square_div.classList.add("square-81");
            playfield.append(square_div);
            square_div.innerHTML = array_81[i];
            square_div.addEventListener("click", function () {
                square_div.classList.add("b-yellow");
            });
        }

    } else if (valore_select == "Hard") {
        for(i = 0; i < 49; i++) {
            let square_div = document.createElement('div');
            square_div.classList.add("square-49");
            playfield.append(square_div);
            square_div.innerHTML = array_49[i];
            square_div.addEventListener("click", function () {
                square_div.classList.add("b-yellow");
            });
        }
    }
  });
   

