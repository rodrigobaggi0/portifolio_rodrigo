export function switchMenu(){
    let div_menu = document.getElementById('menu_container');

    if(div_menu.style.left == '70vw'){
        div_menu_style.left = '100vw';
    }else{
        div_menu.style.left = '70vw';
    }
}