console.log("hello typescript");

function add(a: number, b: number){
    return a + b
}

const sum = add(2, 5);

//bolean
let muted: boolean = true;
muted = false;



//numbers
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;



//string
let nombre: string = 'Juanjo'
let saludo = `Me llamo ${nombre}`;



//arrays
let people: string[] = [];
people = ["Isabel", "Nicole", "Raúl"];
//people.push("900");
let peopleAndNumbers: Array< String | number > = [];
peopleAndNumbers.push("Juanjo");
peopleAndNumbers.push(90001);



//Enum
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
    Amarillo = "Amarillo"
}

let colorFavorito: Color = Color.Azul
console.log(`Mi color favorito es ${colorFavorito}`);



// Any
let comodin: any = "Joker";
comodin = { type: "'Wildcard" };



// Object
let someObject: object = {  type: 'WildCard' };



// Functions
function addNumber(a: number, b: number): number {
    return a + b
}

const sumNumbers = addNumber(4, 6);


function createAdder (a: number): (number) => number {
    return function (b: number) {
        return b = a;
    }
}

const addFour = createAdder(4)
const fourPlus6 = addFour(6)


function fullName(firstName: string, lastName?: string): string {
    return `${firstName} ${lastName}`;
}

const juanjo = fullName("juan")
console.log(juanjo);



// Interfaces

enum ColorFigure {
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul'
}
interface Rectangulo {
    ancho: number;
    alto: number;
    color?: ColorFigure;
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: ColorFigure.Azul
}

function area(r: Rectangulo): number {
    return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);


rect.toString = function () {
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`
}

console.log(rect.toString());