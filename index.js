if (document.getElementById("abrir-modal")) {

    var modal = document.getElementById("mymodal");
    var img = document.getElementById("abrir-modal");
    var span = document.getElementsByClassName("cerrar")[0];
    var body = document.getElementsByTagName("body");

    img.onclick = function () {

        modal.style.display = "flex";
        body.style.position = "-webkit-sticky";
        body.style.height = "100%";
        body.style.overflow = "auto";
    }

    span.onclick = function () {

        modal.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }
}

if (document.getElementById("abrir-modal2")) {


    var modal2 = document.getElementById("mymodal2");
    var img2 = document.getElementById("abrir-modal2");
    var span2 = document.getElementsByClassName("cerrar2")[0];
    var body2 = document.getElementsByTagName("body");

    img2.onclick = function () {

        modal2.style.display = "flex";
        body2.style.position = "-webkit-sticky";
        body2.style.height = "100%";
        body2.style.overflow = "auto";
    }

    span2.onclick = function () {

        modal2.style.display = "none";
        body2.style.position = "inherit";
        body2.style.height = "auto";
        body2.style.overflow = "visible";
    }
}

if (document.getElementById("abrir-modal3")) {


    var modal3 = document.getElementById("mymodal3");
    var img3 = document.getElementById("abrir-modal3");
    var span3 = document.getElementsByClassName("cerrar3")[0];
    var body3 = document.getElementsByTagName("body");

    img3.onclick = function () {

        modal3.style.display = "flex";
        body3.style.position = "-webkit-sticky";
        body3.style.height = "100%";
        body3.style.overflow = "auto";
    }

    span3.onclick = function () {

        modal3.style.display = "none";
        body3.style.position = "inherit";
        body3.style.height = "auto";
        body3.style.overflow = "visible";
    }
}