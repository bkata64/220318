evszakok = ["osz","tel","tavasz","nyar"]
honapok = ["szeptember","október","november","december","január","február","március","április","május","június","július","augusztus"]

function honapjai(evszak){
    document.getElementById("honapok").innerHTML = "";
    for(j=0; j < 4; j++){
        if(evszak==evszakok[j]){
            for(i=j * 3; i < (j+1)*3; i++){
                var ujelem = document.createElement("li");
                var ujszoveg = document.createTextNode(honapok[i]);
                ujelem.appendChild(ujszoveg);
                document.getElementById("honapok").appendChild(ujelem)
            }
        }
    }    
    
}