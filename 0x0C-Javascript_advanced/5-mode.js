function changeMode(size, weight, transform, background, color) {
    return () => {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
};

function main() {
    let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    let p = document.createElement("p");
    p.innerHTML = 'Welcome Holberton!';
    document.body.appendChild(p);

    let btn1 = document.createElement('button');
    btn1.innerHTML = 'Spooky';
    btn1.addEventListener('click', spooky);
    document.body.appendChild(btn1);

    let btn2 = document.createElement('button');
    btn2.innerHTML = 'Dark mode';
    btn2.addEventListener('click', darkMode);
    document.body.appendChild(btn2);

    let btn3 = document.createElement('button');
    btn3.innerHTML = 'Scream mode';
    btn3.addEventListener('click', screamMode);
    document.body.appendChild(btn3);
};

main();