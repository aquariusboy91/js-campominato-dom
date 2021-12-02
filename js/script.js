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

//richiamo il container playfield

let playfield = document.querySelector('.playfield');

//creo un array di numeri random da 1 a 100
let array_100= [];
i = 0; 
while (i < 100) {
    let numero_rand = Math.floor(Math.random() * 100);
     array_100.push(numero_rand);
     i++;
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
   

