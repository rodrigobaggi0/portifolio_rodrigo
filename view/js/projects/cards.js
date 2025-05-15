import { cards_bd } from "../../../model/cards_bd.js";


export function createCards() {
    let cards_section = document.getElementById('cards');

    for (let i = 0; i < cards_bd.length; i++) {
        let div_cartao = document.createElement('div');
        div_cartao.className = 'card';

        let i_cartao = document.createElement('img');
        i_cartao.src = cards_bd[i].img;

        let titulo_cartao = document.createElement('h1');
        titulo_cartao.textContent = cards_bd[i].nome;

        let valor_cartao = document.createElement('h4');
        valor_cartao.textContent = cards_bd[i].lenguages;



        div_cartao.appendChild(i_cartao);
        div_cartao.appendChild(titulo_cartao);
        div_cartao.appendChild(valor_cartao);
      
        cards_section.appendChild(div_cartao);
    }
}