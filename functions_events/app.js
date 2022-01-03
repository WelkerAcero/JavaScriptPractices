function avisoOver(){
    var name = "Imagen 1 UTS onmouseover"
    var name2 = "Imagen 2 UTS onClick"
    var v = document.getElementById("val");
    var v1 = document.getElementById("val_1");
    v.style.borderColor = "white";
    v.value = name;
    v1.value = name2;
    console.log(name);
}