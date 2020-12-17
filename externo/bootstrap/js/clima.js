const url = "https://www.meteored.com.ar/wid_loader/7bef75b99ce1267bbaf0b1124672822a&mode=html";

function loadClick(event) {
    event.preventDefault();
    let container = document.querySelector("#use-ajax");
    fetch(url).then(
        function (response) {
            response.text().then(t =>
                container.innerHTML = t)
        })
}

window.addEventListener('load', loadClick)