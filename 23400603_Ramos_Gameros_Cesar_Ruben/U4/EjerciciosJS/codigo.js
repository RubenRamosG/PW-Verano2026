


// 1.- Commparar numeros
function e1() {
    let n1 = Math.floor(Math.random() * 100);
    let n2 = Math.floor(Math.random() * 100);

    console.log(n1);
    console.log(n2);
    if (n1 == n2) {
        console.log("Los numeros son iguales")
    }
    else if (n1 > n2) {
        console.log("El Primer numero es mayor que el segundo: " + n1)
    } else {
        console.log("El segundo numero es mayor que el primero: " + n2)

    }
}

e1();

// 2.- Numeros continuos
function e2() {
    let n;
    do {
        n = Math.floor(Math.random() * 6);
        console.log(n)

    } while (n !== 0);
}

e2()
// 3.- tabla del 2 al 10 

function e3() {
    let n1 = Math.floor(Math.random() * 9) + 2;
    console.log("Numero generado: " + n1)

    for (let i = 1; i <= 10; i++) {
        console.log(`${n1} x ${i} = ${n1 * i}`);
    }
}

e3();

// 4.- 10 nuemros del 1 al 100 y cuales son par y impar

function e4() {

    let par = 0;
    let imp = 0;

    for (let i = 1; i < 11; i++) {
        let n;
        do {
            n = prompt("ingresa el número ${i}: (que sea del 1-100)")
            if (n < 1 || n > 100 || n == null) {
                console.log("Por favor ingrese un numero entre el 1 al 100")
            }

        } while (n < 1 || n > 100);
        if (n % 2 == 0) {
            par++
        } else {
            imp++
        }
    }
    console.log("Numeros pares:" + par)
    console.log("Numeros Impares:" + imp)
}

e4();

// 5.- Tienda deparmental
function e5() {
    let ven;
    do {
        ven = prompt("Por favor ingresa el monto de venta entre ($5,000 - $30,000): ")
        if (ven == null || ven < 5000 || ven > 30000) {
            console.log("Por favor ingrese un monto valido usted ingreso: " + ven);
        }
    } while (ven == null || ven < 5000 || ven > 30000);
    let com

    if (ven < 10000) {
        com = ven * 0.10;
    } else if (ven > 30000) {
        com = ven * 0.15;
    }

    console.log("El empleado recibira de comision $" + com);
}

e5();

