function mobileMenu(){
 if (document.getElementById('menu').style.display == 'block'){
    document.getElementById('menu').style.display = 'none';
 } else {
     document.getElementById('menu').style.display = 'block';
 }
}
document.getElementById('menuicon').addEventListener('click', mobileMenu);

function resetMenu() {
    if(window.innerWidth >= 450){
        document.getElementById('menu').style.display ='flex';
    } else if (window.innerWidth <= 450){
        document.getElementById('menu').style.display = 'none';
    }
}
window.addEventListener('resize', resetMenu);