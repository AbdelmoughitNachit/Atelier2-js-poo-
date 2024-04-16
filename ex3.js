class Vecteur2D {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    afficher() {
        console.log('x : '+this.x+' y : '+this.y);
    }

    static additionner(v1, v2) {
        return new Vecteur2D(v1.x + v2.x, v1.y + v2.y);
    }
}

let v1 = new Vecteur2D();
// console.log(v1);
// v1.afficher();
let v2 = new Vecteur2D(10, 20);
// console.log(v2);
// v2.afficher();
let add=Vecteur2D.additionner(v1,v2);
// add.afficher();

class Rectangle {
    constructor(longueur = 1, largeur = 1) {
        this.longueur = longueur;
        this.largeur = largeur;
        this.nom = "rectangle";
    }
    afficher() {
        console.log('Rectangle : Longueur ='+this.longueur+' , Largeur = '+this.largeur);
    }
    surface() {
        return this.longueur * this.largeur;
    }
}

let reg1 = new Rectangle();
// reg1.afficher(); 
// console.log("surface 1 :", reg1.surface());
let reg2 = new Rectangle(5, 9);
// reg2.afficher(); 
// console.log("surface 2 :", reg2.surface());


class Carre extends Rectangle {
    constructor(cote = 1) {
        super(cote, cote); 
        this.nom = "carré";
    }
}
let carre = new Carre(5);
// console.log("Carré : ");
// carre.afficher(); 
// console.log("surface du carré :", carre.surface());

class Point {
    constructor(x = 0.0, y = 0.0) {
        this.x = x;
        this.y = y;
    }
}
class Segment {
    constructor(xOrigine = 0.0, yOrigine = 0.0, xExtremite = 0.0, yExtremite = 0.0) {
        this.orig = new Point(xOrigine, yOrigine);
        this.extrem = new Point(xExtremite, yExtremite);
    }
}

let seg = new Segment(1, 2, 4, 6);
console.log("ori du segment : ", seg.orig);
console.log("ex du segment : ", seg.extrem);