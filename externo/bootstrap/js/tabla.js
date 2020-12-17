let data =
  [
    {
      "Titulo": "Kim Jong Un suspende los planes de acción militar contra el Sur",
      "Fecha": "21-9-20",
      "Seccion": "Mundo"
    },
    {
      "Titulo": "A traves de un video el Gobierno declaro que sigue la cuarentena",
      "Fecha": "21-9-20",
      "Seccion": "Politica"
    },
    {
      "Titulo": "La policia marchó por condiciones laborales",
      "Fecha": "20-9-20",
      "Seccion": "Politica"
    },
    {
      "Titulo": "River mostró toda su contundencia, goleó 6-0 a Binacional en Perú y se encamina hacia los octavos de la Copa Libertadores",
      "Fecha": "22-9-20",
      "Seccion": "Deportes"
    },
    {
      "Titulo": "Cuatro motivos que explican por qué el dólar contado con liqui llegó a un récord de 148 pesos",
      "Fecha": "22-9-20",
      "Seccion": "Economia"
    },
    {
      "Titulo": "Pedro Sánchez se ofrece a reunirse en Sol con Ayuso para hablar de la situación de la pandemia",
      "Fecha": "21-9-20",
      "Seccion": "Mundo"
    }
  ]


const tablaEl = document.getElementById('cont');
tablaEl.setAttribute("class", "table-dark container table-striped table-hover clase-tabla")
const btnAdd = document.getElementById('btn-add');
const tBodyEl = document.getElementById('tbody-tabla');
const modalHeader = document.getElementById('modal-header');
const modalBody = document.getElementById('cuerpo-modal');
const modalFooter = document.getElementById('pie-modal');

let clavesData = Object.keys(data[0]);

let nuevaNoticia = {
  Titulo:"",
  Fecha: "",
  Seccion:""
}

function limpiarTabla() {
  tBodyEl.innerHTML = "";
}

let createHeader = (claves) => {
  let theadEl = document.createElement("thead");
  let trEl = document.createElement("tr");
  claves.forEach(element => {
        let thEl = document.createElement("th");
        thEl.innerHTML = element;
        trEl.appendChild(thEl);
  });
  theadEl.appendChild(trEl);
  tablaEl.appendChild(theadEl);
};

let createRow = (elemento) => {

  let trEl = document.createElement('tr');
  for (key in elemento) {

    let tdEl = document.createElement('td');
    tdEl.setAttribute("class", "texto-tabla")
    tdEl.innerHTML = elemento[key];
    trEl.appendChild(tdEl);

  }
  let tdEl = document.createElement('td');
  tdEl.classList = "texto-boton"

  let buttonEdit = document.createElement('button');
  buttonEdit.setAttribute("class", "btn-edit boton-tabla");
  buttonEdit.textContent = "edit";
  data.id = buttonEdit;
  buttonEdit.addEventListener('click', () => {
    showModalEditar(fila)
  })


  let buttonDel = document.createElement('button')
  buttonDel.setAttribute("class", "btn-del boton-tabla")
  buttonDel.textContent = "delete";
  data.id = buttonDel
  buttonDel.addEventListener('click', () => {
    trEl.remove(tdEl)
  })
  tdEl.appendChild(buttonEdit);
  tdEl.appendChild(buttonDel);
  trEl.appendChild(tdEl)

  return trEl
};

let createBody = (elementos) => {
  let tbodyEl = document.createElement("tbody");
    for (let i = 0; i < elementos.length; i++) {
      tbodyEl.appendChild(createRow(elementos[i]))
  };
  tablaEl.appendChild(tbodyEl);
};

let showModalAgregar = () => {
  let formEl = document.createElement('form');
  formEl.setAttribute("class", "form-horizontal")

  let modalTitle = document.querySelector('h5');
  modalTitle.innerText = "Añadir nueva fila";
  
  let labelTitulo = document.createElement('label');
  labelTitulo.setAttribute("for", "inputTitle");
  labelTitulo.innerText = "Titulo";
  let inputTitulo = document.createElement('input');
  inputTitulo.setAttribute("id", "inputTitle");
  inputTitulo.setAttribute("class", "form-control");
  inputTitulo.setAttribute("placeholder", "Titulo");

  let labelFecha = document.createElement('label');
  labelFecha.setAttribute("for", "inputFecha");
  labelFecha.innerText = "Fecha";
  let inputFecha = document.createElement('input');
  inputFecha.setAttribute("id", "inputFecha");
  inputFecha.setAttribute("class", "form-control");
  inputFecha.setAttribute("placeholder", "Fecha");

  let labelSeccion = document.createElement('label');
  labelSeccion.setAttribute("for", "inputSeccion");
  labelSeccion.innerText = "Seccion";
  let inputSeccion = document.createElement('input');
  inputSeccion.setAttribute("id", "inputSeccion");
  inputSeccion.setAttribute("class", "form-control");
  inputSeccion.setAttribute("placeholder", "Seccion");

  formEl.appendChild(labelTitulo);
  formEl.appendChild(inputTitulo);
  formEl.appendChild(labelFecha);
  formEl.appendChild(inputFecha);
  formEl.appendChild(labelSeccion);
  formEl.appendChild(inputSeccion);
  modalBody.appendChild(formEl);

  let btnAceptar = document.createElement('button');
  btnAceptar.setAttribute("type", "button");
  btnAceptar.setAttribute("class", "btn btn-primary texto-boton");
  btnAceptar.setAttribute("id", "btnAceptar");
  btnAceptar.innerText = "Aceptar";

  let btnCancelar = document.createElement('button');
  btnCancelar.setAttribute("type", "button");
  btnCancelar.setAttribute("class", "btn btn-danger texto-boton");
  btnCancelar.setAttribute("aria-label", "Close");
  btnCancelar.setAttribute("aria-hidden", "true");
  btnCancelar.setAttribute("id", "btnCancelar");
  btnCancelar.innerText = "Cancelar";

  
  formEl.appendChild(btnAceptar);
  formEl.appendChild(btnCancelar);

  btnCancelar.removeEventListener("click", showModalAgregar)

}

btnAdd.onclick = () => {
  showModalAgregar();
}

window.addEventListener("load", () => {
  createHeader(clavesData);
  createBody(data);
});