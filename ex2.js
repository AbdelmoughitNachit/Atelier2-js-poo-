// 1 et 2
function Etudiant(nom, prenom, age, cne) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.cne = cne;

    this.etudier = function() {
        console.log(this.prenom+' '+this.nom+' étudie');
    };
}

function Professeur(nom, age, cin) {
    this.nom = nom;
    this.age = age;
    this.cin = cin;
    this.enseigner = function() {
        console.log(this.nom+' enseigne');
    };
}

let e1 = new Etudiant("nahcit", "a1", 20, "5463298562");
// console.log(e1);
// e1.etudier();
let e2 = new Etudiant("a2", "n2", 23, "6523652825");
// console.log(e2);
// e2.etudier();
let p1 = new Professeur("ab", 30, "xswtdjhwj");
// console.log(p1);
// p1.enseigner();
let p2 = new Professeur("ab2", 35, "gtgjuhjjj");
// console.log(p2);
// p2.enseigner();


// 3
let list_e=[e1,e2];
// console.log(list_e);
let ne = list_e.slice().sort((a, b) => a.nom.localeCompare(b.nom));
// console.log(ne);
let pe = list_e.slice().sort((a, b) => a.prenom.localeCompare(b.prenom));
// console.log(pe);
ne.forEach(elm => {
    console.log(elm.nom+' '+elm.prenom);
});
pe.forEach(elm => {
    console.log(elm.nom+' '+elm.prenom);
});