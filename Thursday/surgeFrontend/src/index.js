import 'bootstrap/dist/css/bootstrap.css'

const tb = document.getElementById("tb");

const url = "https://www.mathiasnoeclausen.dk/person/api/person/all";
display();
function display() {
    document.getElementById("tb").value = "";
    fetch(url)
            .then(res => fetchWithErrorCheck(res))
            .then((data) => {
                const trs = data.all.map(user => {
                    return `<tr><td>${user.id}</td><td>${user.firstName}</td><td>${user.lastName}</td><td>${user.phone}</td><td>${user.address.street}</td><td>${user.address.zip}</td><td>${user.address.city}</td></tr>`

                });
                const trStr = trs.join("");
                document.getElementById("tb").innerHTML = trStr;
                console.log(trStr);
            });
}

document.getElementById("refresh").onclick = () => {
    window.location.reload();
}

function fetchWithErrorCheck(res) {
    if (!res.ok) {
        return Promise.reject({status: res.status, fullError: res.json()});
    }
    return res.json();
}