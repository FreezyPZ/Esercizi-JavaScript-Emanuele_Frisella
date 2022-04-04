  

//   function faccioCompiti(materia,callback){
//       console.log(`sto facendo i compiti di ${materia}`);
//       callback();
//   }

//    function finitoCompiti() {
//         let materia="inglese"
//         console.log(`ho finito i compiti ${materia}`);
//   }

//   faccioCompiti("inglese",finitoCompiti);


    function cucinarePasta(minutiCottura,peppino,francesco){
        console.log(`la pasta deve cucinare ${minutiCottura}`);
        peppino();
        francesco();
        
  }

function pastaPronta(){
    let scolarePasta="La pasta è pronta!";
    console.log(scolarePasta);
}

function funzionePeppino(){
    console.log("si mangia!")
}
  
cucinarePasta("10 minuti",pastaPronta,funzionePeppino)
