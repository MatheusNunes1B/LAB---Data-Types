let contatos = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

let novoContato = {
    name: "Maisie Haley",
    phone: "0913 531 303",
    email: "risus.Quisque@urna.ca"
}
contatos.push(novoContato);

console.log(`Primeiro Contado:\nNome: ${contatos[0].name}\nCelular: ${contatos[0].phone}\nEmail: ${contatos[0].emails}\n`);
let ultimo = contatos.length - 1;
console.log(`\nSegundo Contato:\nNome: ${contatos[ultimo].name}\nCelular: ${contatos[ultimo].phone}\nEmail: ${contatos[ultimo].email}`);
