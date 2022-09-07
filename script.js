console.log('JS OK')

const soci = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg',
    }
]

const sociContainer = document.getElementById('team');

for (let i = 0; i < soci.length; i++) {
    const socio = soci[i];
    console.log(`nome ${socio.nome} - ruolo ${socio.ruolo} - foto ${socio.foto}`);

    sociContainer.innerHTML += `<div>
                                      <div><img src="img/${socio.foto}" alt="Foto"></div>
                                      <div>Nome: ${socio.nome}</div>
                                      <div>Ruolo: ${socio.ruolo}</div>                                      
                                </div>`
}


