export function createheader(){
    let header = document.getElementById('header');

    let div_logo_profission = document.createElement('div')
    div_logo_profission.id = 'logo-profission'

    let div_logo = document.createElement('div')
    div_logo.id = 'logo'

    let h3 = document.createElement('h3')
    h3.textContent = 'Técnico em Informática para Internet'

    div_logo_profission.appendChild(div_logo)
    div_logo_profission.appendChild(h3)

    header.appendChild(div_logo_profission)


    const btns_text = ["HOME", "PROJETOS", "FORMAÇÃO"]
    const links = ['./index.html', './projects.html', './formation.html']
    // btns_text[i]

    let div_buttons = document.createElement('div')
    div_buttons.id = 'button-hearder'

    for (let i = 0; i < 3; i++) {
        let div_button_container = document.createElement('div')
        div_button_container.className = 'button-container'

        div_button_container.addEventListener('click', ()=>{
            window.location.href = links[i]
        })
        
        let button = document.createElement('button')
        button.className = 'real-button'

        let div_spin_blur = document.createElement('div')
        div_spin_blur.className = 'spin spin-blur'

        let div_spin_intence = document.createElement('div')
        div_spin_intence.className = 'spin spin-intense'

        let div_backdrop = document.createElement('div')
        div_backdrop.className = 'backdrop'

        let div_button_border = document.createElement('div')
        div_button_border.className = 'button-border'

        let div_spin_inside = document.createElement('div')
        div_spin_inside.className = 'spin spin-inside'

        let div_button = document.createElement('div')
        div_button.textContent = btns_text[i]
        div_button.className = 'button'

        let icon = document.createElement('i')
        icon.className = 'fa-solid fa-house'

        div_button.appendChild(icon)

        div_button_border.appendChild(div_spin_inside)
        div_button_border.appendChild(div_button)

        div_button_container.appendChild(button)
        div_button_container.appendChild(div_spin_blur)
        div_button_container.appendChild(div_spin_intence)
        div_button_container.appendChild(div_backdrop)
        div_button_container.appendChild(div_button_border)

        div_buttons.appendChild(div_button_container)
    }

    header.appendChild(div_buttons)
}