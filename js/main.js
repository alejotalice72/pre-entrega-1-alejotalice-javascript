// MENU
let menu = parseInt(prompt("-- Menu -- \n 1. Formula Bhaskara/Cuadratica \n 2. Formula Pitagoras \n 3. Area de un circulo \n 4. area de un triangulo \n 5. Salir"));

// Functions
const formulaBhaskara = (a,b,c) => {
// calcular determinante b^2-4*a*c --> determinante = 0 (X1=X2) --> determinante > 0 (X1=α X2=β) --> determinante < 0 (No tiene solucion en el conjunto de los reales)
    let determinante = Math.pow(b,2)-4*a*c;
    if (determinante >= 0) {
        let funcionPositiva = (-b + Math.sqrt(Math.pow(b,2)-4*a*c)) / (2*a);
        let funcionNegativa = (-b - Math.sqrt(Math.pow(b,2)-4*a*c)) / (2*a);
        let resultado = ("X1= " + funcionPositiva + "   X2= " + funcionNegativa);
        console.log("a"+a+" b"+b+" c"+c);
        return resultado;
    } else {
        let resultado = ("No tiene solucion en el conjunto de los numero reales");
        return resultado;
    }
};
const formulaPitagoras = (ca,co) => {
// H^2 = CA^2 + CO^2 --> H = √ (CA^2 + CO^2)
    let hipotenusa = Math.sqrt(Math.pow(ca,2)+Math.pow(co,2));
    let resultado = ("La hipotenusa es --> " + hipotenusa);
    return resultado;
};
const formulaAreaCirculo = (r) => {
// π r^2
    let area = Math.PI*Math.pow(r,2);
    let resultado = ("El area del circulo es --> " + area);
    return resultado;
};
const formulaAreaTriangulo = (b,h) => {
// (b*h)/2
    let area = (b*h)/2;
    let resultado = ("El area del triangulo es --> " + area);
    return resultado;
};

// MENU
while (menu != 5) {
    switch (menu) {
        case (1):
            alert("-- Formula Bhaskara -- \n aX^2 + bX + c ");
            let a = parseFloat(prompt("Ingrese el valor de A: "));
            let b = parseFloat(prompt("Ingrese el valor de B: "));
            let c = parseFloat(prompt("Ingrese el valor de C: "));
            alert(formulaBhaskara(a,b,c));
            break;
        case (2):
            alert("-- Formula Pitagoras -- \n h^2 = ca^2 + co^2 ");
            let ca = parseFloat(prompt("Ingrese la medida del cateto adyacente: "));
            let co = parseFloat(prompt("Ingrese la medida del cateto opuesto: "));
            alert(formulaPitagoras(ca,co));
            break;
        case (3):
            alert("-- Area de un circulo -- \n π r^2 ");
            let r = parseFloat(prompt("Ingrese la medida del radio: "));
            alert(formulaAreaCirculo(r));
            break;
        case (4):
            alert("-- Area de un triangulo -- \n (b*h)/2 ");
            let base = parseFloat(prompt("Ingrese la base de su triangulo: "));
            let h = parseFloat(prompt("Ingrese la altura de su triangulo: "));
            alert(formulaAreaTriangulo(base,h));
            break;
        case (23):
            alert("EasterEgg SORPRESA");
            break;
        default:
            alert("Ingrese un numero valido");
    }
    menu = parseInt(prompt("-- Menu -- \n 1. Formula Bhaskara/Cuadratica \n 2. Formula Pitagoras \n 3. Area de un circulo \n 4. area de un triangulo \n 5. Salir"));
}
console.log("Finalizo el programa");