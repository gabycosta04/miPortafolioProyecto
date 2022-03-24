function removeActive(){
    var cantidad = document.getElementsByClassName("active").length;
    for (var objeto = 0; objeto < cantidad; objeto++) {
        var object = document.getElementsByClassName("active")[0];
        object.classList.remove("active");
    }
    
}

function removeShow(){
    var cantidad = document.getElementsByClassName("show").length;
    for (var objeto = 0; objeto < cantidad; objeto++) {
        var object = document.getElementsByClassName("show")[0];
        object.classList.remove("show");
    }
    
}

function addActive(valor){
    var obj = document.getElementById(valor);
    obj.classList.add("active");
}

function addShow(valor){
    var obj = document.getElementById(valor);
    obj.classList.add("show");
}

function seleccionarOtraOpcion(valor){
    if (document.querySelector("#"+valor+".active")) {
        return 1;
    }
    return 0;
        
}




/* -------------------------------------------------- */

function myFunction1(){
    const valorOpcionSeleccionada = seleccionarOtraOpcion("list-home-list");
    removeActive();
    removeShow();
    if(!valorOpcionSeleccionada){
        addActive("list-home");
        addShow("list-home");
        addActive("list-home-list");
    }
    
    

}

function myFunction2(){
    const valorOpcionSeleccionada = seleccionarOtraOpcion("list-profile-list");
    removeActive();
    removeShow();
    if(!valorOpcionSeleccionada){
        addActive("list-profile");
        addShow("list-profile");
        addActive("list-profile-list");
    }
    
}


function myFunction3(){
    const valorOpcionSeleccionada = seleccionarOtraOpcion("universidad-home-list");
    removeActive();
    removeShow();
    if(!valorOpcionSeleccionada){
        addActive("universidad-home");
        addShow("universidad-home");
        addActive("universidad-home-list");
    }
    
    

}

function myFunction4(){
    const valorOpcionSeleccionada = seleccionarOtraOpcion("curso1-home-list");
    removeActive();
    removeShow();
    if(!valorOpcionSeleccionada){
        addActive("curso1-home");
        addShow("curso1-home");
        addActive("curso1-home-list");
    }
    
}




