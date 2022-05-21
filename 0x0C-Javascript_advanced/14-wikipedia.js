function createElement(data) {
    let p = document.createElement("p");
    p.innerHTML = data;
    document.body.appendChild(p);
};

function queryWikipedia(callback) {
    let url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';
    
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, true);

    xhttp.onreadystatechange = function () {
        if(this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            let data = JSON.parse(xhttp.responseText);
            callback(data.query.pages["21721040"].extract);
        } else {
            alert(`Error ${this.status}: ${this.statusText}`);
        }
    };

    xhttp.send();
};

queryWikipedia(createElement);