let input = document.querySelector("#inputText");
let menu = document.querySelector(".menu");

const productos = [
    {nombre: "futomaki"},
    {nombre: "maki"},
    {nombre: "pacumuto"},
    {nombre: "nigiri"},
];

const buscador = () => {
    menu.innerHTML = "";

    const inputText = input.value.toLowerCase();
    for(let producto of productos) {
        let txt = producto.nombre.toLowerCase();
        if(txt.indexOf(inputText) !== -1){
            menu.innerHTML += `
                <div id="${producto.nombre}" class="menu__plato">
                    <p class="menu__${producto.nombre}">Ejemplo ${producto.nombre}</p>
                </div>
            `
        }
    }

    if(menu.innerHTML === ""){
        menu.innerHTML += `
            <h1 class="noExiste">Producto no existe</h1>
        `
    }

}
buscador();
input.addEventListener("keyup", buscador);
