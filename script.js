"use strict"

const cards = [
    {
        nome: "Wayne Barnett",
        role: "Founder & CEO",
        picture: "wayne-barnett-founder-ceo.jpg",
    },
    {
        nome: "Angela Caroll",
        role: "Chief Editor",
        picture: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        role: "Office Manager	",
        picture: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        role: "Social Media Manager",
        picture: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        role: "Developer",
        picture: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        role: "Graphic Designer",
        picture: "barbara-ramos-graphic-designer.jpg"
    }
]

for (let i = 0; i < cards.length; i++) {
    printCol(cards[i]);
}

function printCol(cards) {
    const col = document.createElement('div');
    col.classList.add('col-4', 'mt-2');
    const template = `
    <div class="card text-center">
     <img class="card-img-top" src="img/${cards.picture}"
     <div class="card-body">
            <h4 class="card-title">${cards.nome}</h4>
            <p class="card-text">${cards.role}
            </p>
            </div>
        </div>
    `;
    col.innerHTML = template 
    const row = document.querySelector('.row');
    row.append(col)
}

