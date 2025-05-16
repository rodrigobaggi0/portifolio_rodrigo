import { cards_fbd } from '../../../model/cards_fbd.js';

export function createCardsF(){
    
 let cards_section = document.getElementById('cards_f');

    for (let i = 0; i < cards_fbd.length; i++) {
      
        let div_card_f = document.createElement('div');
        div_card_f.className = 'card_f';

   
        let div_card_content = document.createElement('div');
        div_card_content.className = 'card_content';

        // Imagem
        let img = document.createElement('img');
        img.className = 'card_image';
        img.src = cards_fbd[i].img;
        img.alt = cards_fbd[i].nome;

        // Texto do cartão
        let div_card_text = document.createElement('div');
        div_card_text.className = 'card_text';

        let titulo = document.createElement('h3');
        titulo.textContent = cards_fbd[i].nome;

        let descricao = document.createElement('p');
        descricao.textContent = cards_fbd[i].lenguages;

        // Montagem da estrutura
        div_card_text.appendChild(titulo);
        div_card_text.appendChild(descricao);
        div_card_content.appendChild(img);
        div_card_content.appendChild(div_card_text);
        div_card_f.appendChild(div_card_content);
        // Inserção no DOM
        cards_section.appendChild(div_card_f);
    }
}