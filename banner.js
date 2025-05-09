let actual_banner = 1;
const qnt_banner = 3;

export function switchBanner(n_banner) {
    let banners = document.getElementById('banners');
    banners.style.let = `-${n_banner - 1}00vw`;
    actual_banner = n_banner;
}

setInterval(()=>{
    if(actual_banner >= qnt_banner){
        actual_banner = 0;
    }
    switchBanner{actual_banner + 1};
}, 4000);