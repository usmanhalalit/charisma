function loadApplet() {
    

    var a = document.createElement('applet');
    a.id = "divApplet";
    a.innerHTML = '';
    a.style = "display: block;";    

    document.getElementById('placeholder').appendChild(a);    
}