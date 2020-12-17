


let d = new Date();
const dia = new Array(7);
dia[0] = "Domingo";
dia[1] = "Lunes";
dia[2] = "Martes";
dia[3] = "Miercoles";
dia[4] = "Jueves";
dia[5] = "Viernes";
dia[6] = "Sabado";


function startTime() {
    today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('reloj').innerHTML = d;
    t = setTimeout('startTime()', 500);
    
  }
 function checkTime(i) {
       if(i < 10) { 
           i = "0" + i; 
        }
        return i; 
    }
  window.onload = function () { 
      startTime(); 
    }