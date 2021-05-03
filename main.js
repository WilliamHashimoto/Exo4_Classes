// ## EXO1

// ### Créez une class [Lieu] avec une propriété nom(string) et personnes(array vide).
// ### Puis créez des instances de [Lieu]: MolenGeek, Snack et Maison
// ### Puis créez une class [Personne] avec une propriété nom(string), prenom(string), argent(number) et une methode seDeplacer(), cette methode permet de vous déplacer dans les differents lieux en faisant appel à la méthode embarquer() du bus.
// ### Puis créez une instance de votre personnage.
// ### Créez une class [Bus] avec une propriéte personnes(array vide), une propriéte caisse(number) et une methode embarquer() (qui sera appelée dans la méthode seDeplacer() de la personne) qui va vérifier si vous possedez l'argent, si oui, il le déduit de votre argent, et le rajoute à sa caisse, et le personnage rentre dans le bus. Le bus cout 2.80.

// ### Créez une instance de Bus. 
// ### 8h00 Vous êtes à la maison.
// ### 8h30 Vous prennez le bus vers MolenGeek.
// ### 8h45 Vous êtes à MolenGeek.
// ### 12h45 Vous sortez de MolenGeek, vous prenez le bus pour aller au snack.
// ### 13h30 Vous sortez du snack, et vous rentrer pied à MolenGeek pour digérer.
// ### 17h10 Vous sortez de MolenGeek, vous prenez le bus pour rentrer chez vous.

// ### Faites un console.log() de votre argent, ainsi que l'argent du Bus

class Lieu {
    constructor(nom, personnes) {
        this.nom = nom,
        this.personnes = personnes
    }
}

let molenGeek = new Lieu ("Monlenbeek", []);
let snack = new Lieu ("Place Saint Josse", []);
let maison = new Lieu ("Saint-Josse", []);

class Personne {
    constructor(nom,prenom,argent) {
        this.nom = nom,
    this.prenom = prenom,
    this.argent = argent
    }
    seDeplacer(bus) {
        bus.embarquer(this);
    }
}

let george = new Personne("Parer", "Georges", 20);

class Bus {
    constructor(personnes, caisse) {
        this.personnes = personnes,
        this.caisse = caisse
    }
    embarquer(personne) {
        if (personne.argent >= 2.8) {
            this.caisse += 2.8;
            personne.argent -= 2.8;
            this.personnes +=1;
        }
    }
    debarquer() {
        this.personnes -= 1;
    }
}

let vingtNeuf = new Bus ([], 0);
console.log(george.argent);
//8h30
george.seDeplacer(vingtNeuf);
vingtNeuf.debarquer()
molenGeek.personnes.push(george.prenom);
//12h45
molenGeek.personnes.pop();
george.seDeplacer(vingtNeuf);
vingtNeuf.debarquer();
snack.personnes.push(george.prenom);
snack.personnes.pop();
molenGeek.personnes.push(george.prenom);
//17h10
george.seDeplacer(vingtNeuf);
vingtNeuf.debarquer();

console.log(george.argent);
console.log(vingtNeuf.caisse);