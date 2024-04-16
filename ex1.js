// 1 et 2
function Voiture(model, marque, annee, type_carburant) {
    this.model = model;
    this.marque = marque;
    this.annee = annee;
    this.type_carburant = type_carburant;
}

let v1 = new Voiture("aaa", "clie", 2024, "m");
// console.log(v1);
let v2 = new Voiture("g", "pppp", 2023, "l");
// console.log(v2);
let v3 = new Voiture("tgh", "fefrre", 2009, "l");
// console.log(v3);
let list = [v1, v2, v3];
// console.log(list); 
// 3
class Hyundai extends Voiture {
    constructor(model, marque, annee, type_carburant, serie, hybride) {
        super(model, marque, annee, type_carburant);
        this.serie = serie;
        this.hybride = hybride;
    }

    alarmer() {
        console.log("hhhhhh");
    }
}
class Ford extends Voiture {
    constructor(model, marque, annee, type_carburant, options) {
        super(model, marque, annee, type_carburant);
        this.options = options;
    }
}

let h1 = new Hyundai("aaa", "clie", 2024, "m", "p", true);
// console.log(h1);
// console.log(h1.alarmer());
let f1 = new Ford("hjcdsj", "bhjjjd", 2020, "l", ["ghghj", "cxfggfjh","fdtyghkjhgu"]);
// console.log(f1);

// 4
t=list.sort((a,b)=> a.annee + b.annee)
// console.log(t);

for (let i = 0 ; i < t.length; i++) {
    let v = t[i];
    console.log(`marque : ${v.marque} model : ${v.model} anne : ${v.annee} type carburant: ${v.type_carburant}`);
}