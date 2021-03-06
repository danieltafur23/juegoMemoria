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

    //Seleccionar tablero de HTML
    let tablero = document.querySelector(".tablero")
    let imgElegida = [];
    let imgElegidaId = [];
    let aciertos = document.querySelector(".conteo");
    let conteo = [];


    images.sort

    //funcion para colocar las imagenes en el html
    function crearTablero() {

        //images.sort(()=>0.5 - Math.random());

        let i = 0;

        for (i; i < images.length; i++) {
            var img = document.createElement("img");
            img.setAttribute("data-id", i);
            img.setAttribute("src", "img/chc-interrogante.png");
            img.setAttribute("width", "100px");
            img.setAttribute("height", "150px");
            tablero.appendChild(img);
            img.addEventListener("click", descubrirImagen);
        }
    }

    function descubrirImagen(){
        let img  = this.getAttribute("data-id");
        imgElegida.push(images[img].name);
        imgElegidaId.push(img);
        this.setAttribute("src", images[img].img);

        if(imgElegida.length === 2){
            setTimeout(compararImagenes, 300);
        }
    }

    
    
    function compararImagenes(){
        let todasLasImg = document.querySelectorAll("img");
        let opcion1 = imgElegidaId[0];
        let opcion2 = imgElegidaId[1];
        
        
        if(imgElegida[0] === imgElegida[1] && imgElegidaId[0]!==imgElegidaId[1] ){    
            alert("Son iguales las imagenes");
            todasLasImg[opcion1].setAttribute("src", "img/chulo-naranja.png");
            todasLasImg[opcion2].setAttribute("src", "img/chulo-naranja.png");
            conteo.push(imgElegida);
            todasLasImg[opcion1].removeEventListener("click", descubrirImagen);
            todasLasImg[opcion2].removeEventListener("click", descubrirImagen);


        }else{
            alert("No son iguales ome animal");
            todasLasImg[opcion1].setAttribute("src", "img/chc-interrogante.png");
            todasLasImg[opcion2].setAttribute("src", "img/chc-interrogante.png");           
        }

  
        
        //Se llena de nuevo 
        imgElegida = [];
        imgElegidaId = [];
        aciertos.textContent = conteo.length;

        if(conteo.length === 6){
            alert("Ganaste");
            aciertos.textContent = "0";
            conteo.length = 0;
            location.reload();
        }
    }

    //Ejecutar funcion tablero
    crearTablero();
});