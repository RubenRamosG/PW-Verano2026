const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const PORT = 3000;
const path = require("path");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use(express.static(path.join(__dirname, "../EjemploCRUD")));

let peliculas = [
{ id: 1, titulo: "La odisea", director: "Christopher Nolan", año: 2026},
{id: 2, titulo: "The Batman", director: "Matt Reeves", año: 2022}
];

let idActual = peliculas.length +1;

app.get("/peliculas", (req,res) =>{
res.json(peliculas);
});

app.get("/peliculas/:id", (req,res) =>{
    const id = Number(req.params.id);
    const pelicula = peliculas.find(
        pelicula => pelicula.id === id);

        if(!pelicula){
            return res.status(404).json({
                mensaje: "Pelicula no encontrada"
            });
        }
        res.json(pelicula);
    });

app.post("/peliculas", (req,res)=>{
    const{titulo, director, año} = req.body;
    if(!titulo || !director || !año){
        return res.status(404).json({
            mensaje: "Faltan datos de la pelicula"
        });
    }
    const nuevaPelicula = {
        id: idActual++,
        titulo: titulo,
        director: director,
        año: Number(año)
    };

    peliculas.push(nuevaPelicula);
    res.status(201).json({
        mensaje: "Pelicula registrada correctamente",
        pelicula: nuevaPelicula
    });

});

app.put("/peliculas/:id", (req,res) =>{
    const id = Number(req.params.id);
    const { titulo, director, año } = req.body;

    if(!titulo || !director || !año){
        return res.status(404).json({
            mensaje: "Faltan datos en la pelicula"
        });
    }

    const indice = peliculas.findIndex(
        pelicula => pelicula.id === id
    );

    if(indice === -1){
        return res.status(404).json({
            mensaje: "pelicula no encontrada"
        });
    }

    peliculas[indice] = {
        id: id,
        titulo: titulo,
        director: director,
        año: Number(año)
    };

    res.json({
        mensaje: "Pelicula actualizada correctamente",
        pelicula: peliculas[indice]
    });
});

app.delete("/peliculas/:id", (req,res) =>{
const id = Number(req.params.id);
const indice = peliculas.findIndex(
    pelicula => pelicula.id === id
)

if(indice ===-1){
        return res.status(404).json({
            mensaje:"pelicula no encontrada"
        });
    }

    const peliculaEliminada = peliculas[indice];
    peliculas.splice(indice,1);
    res.json({
        mensaje: "Pelicula eliminada correctamente",
        pelicula: peliculaEliminada
    });

});

app.get("/", (req,res) =>{
    res.send("Bienvenido a mi primer servidor con express");
});


app.get("/pagina", (req, res) => {
    res.send(`
        <h1>Mi página</h1>
        <p>Creada con Express</p>
    `);
});

app.get("/saludo/:nombre", (req, res) => {
    const nombre = req.params.nombre;
    res.send("Hola " + nombre);
});

app.get("/par/:numero", (req, res) =>{
    const num = req.params.numero;
    if(num%2==0){
            res.send("El numero es par");
    }else{
        res.send("El numero es impar");
    }
});

app.get("/edad/:edad", (req,res) =>{
    const edad = req.params.edad;
    if(edad>=18){
        res.send("Eres mayor de edad");
    }else{
        res.send("Eres menor de edad");
    }
});

app.get("/calculadora/:operacion/:a/:b", (req,res) =>{
    const operacion = req.params.operacion;
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    let resultado = 0;
    
    switch(operacion){
        case "suma":{
            resultado = a+b;
            res.send("El resultado de la suma es = " + resultado);
            break;
        }
        case "resta":{
            resultado = a-b;
            res.send("El resultado de la resta es =" + resultado);
            break;
        }
        case "multiplicacion":{
            resultado = a*b;
            res.send("El resultado de la multiplicacion es = " + resultado);
            break;
        }
        case "division":{
            resultado = a/b;
            res.send("El resultado de la division es= " + resultado);
            break;
        }
    }

});

app.get("/tabla/:numero", (req,res) =>{
    const numero = req.params.numero;
    let resultado="";
    for(let i=1; i<=10; i++){
        resultado += `${numero} x ${i} = ${numero * i}<br>`;
    }
    res.send(resultado);
});

app.get("/calificacion/:nota", (req,res) =>{
    const calif = Number(req.params.nota);
    if(calif<70){
    res.send("Reprobado");
    }else if(calif>=70 && calif <80){
        res.send("Aprobado");
    }else if(calif>=80 && calif <90){
        res.send("Muy bien");
    }else if( calif>90 && calif <=100)
        res.send("Excelente");
    });


app.listen(PORT, () => {
    console.log("Servidor iniciado en http://localhost:" + PORT);
});