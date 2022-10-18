// Ejercicios POO 1
// 1
class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    obtDetalles() {
        console.log(`Me llamo ${this.nombre}, tengo ${this.edad} años y soy ${this.genero}.`);
    }
}
const persona = new Persona("Ana", 26, "mujer");
persona.obtDetalles();
// 2
class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero);
        this.curso = curso;
        this.grupo = grupo;
    }
    registrar() {
        console.log(`El estudiante se llama ${this.nombre}, tiene ${this.edad} años y es ${this.genero}. Está en el curso de ${this.curso} y en el grupo de ${this.grupo}`);
    }
}
const estudiante = new Estudiante("Alex", 24, "hombre", "FullStack Developer", "Full Time");
estudiante.registrar();
// 3
class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, nivel) {
        super(nombre, edad, genero);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    asignar() {
        console.log(`El profesor se llama ${this.nombre}, tiene ${this.edad} años y es ${this.genero}. Es profesor de ${this.asignatura} en el nivel ${this.nivel}`);
    }
}
const profesor = new Profesor('Paco', 43, "hombre", "inglés", "medio");
profesor.asignar();





// Ejercicios POO 2
// 1
class Warrior {
    constructor(life, power) {
        this.life = life;
        this.power = power;
    }
    attack() {
        return this.power;
    }
    defend(damage) {
        this.life = this.life - damage;
        console.log(this.life);
    }
}
class Maya extends Warrior {
    constructor(life, power) {
        super(life, power);
    }
    drinkColacao() {
        this.power += 10;
    }
}
class Azteca extends Warrior {
    constructor(life, power) {
        super(life, power);
    }
    drinkNesquik() {
        this.life += 10;
    }
}
// 2
const maya = new Maya(100, 10);
const azteca = new Azteca(100, 10);
console.log('Guerreros antes de pelear');
console.log(maya);
console.log(azteca);
azteca.drinkNesquik();
maya.drinkColacao();
azteca.defend(maya.attack());
maya.defend(azteca.attack());
console.log('Guerreros despues de pelear');
console.log(maya);
console.log(azteca);


// Ejercicios POO 3
// Este ejercicio esta en script.js