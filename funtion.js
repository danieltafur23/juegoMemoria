document.addEventListener("DOMContentLoaded", function () {
    let images = [
        {img: "img/tanjiro.png",
        name: "tanjiro"
    },
        {img: "img/serpiente.png",
        name: "serpiente"
    },
        {img: "img/rengoku.png",
        name: "rengoku"
    },
        {img: "img/otro.png",
        name: "otro"
    },
        {img: "img/netzuko.png",
        name: "netzuko"
    },
        {img: "img/corazon.png",
        name: "corazon"
    },
        {img: "img/tanjiro.png",
        name: "tanjiro"
    },
        {img: "img/serpiente.png",
        name: "serpiente"
    },
        {img: "img/rengoku.png",
        name: "rengoku"
    },
        {img: "img/otro.png",
        name: "otro"
    },
        {img: "img/netzuko.png",
        name: "netzuko"
    },
        {img: "img/corazon.png",
        name: "corazon"
    }
    ]

    let tablero = document.querySelector(".tablero")

    //funcion para colocar las imagenes en el html
    function crearTablero() {
        for (let i = 0; i < images.length; i++) {
            var img = document.createElement("img");
            img.setAttribute("data-id", i);
            img.setAttribute("src", "img/chc-interrogante.png");
            img.setAttribute("width", "200px");
            tablero.appendChild(img);
        }
    }

    crearTablero();
});