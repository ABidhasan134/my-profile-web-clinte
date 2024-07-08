const frist= document.querySelector(".frist");
//const indi= document.querySelector(".indicator");
const list = document.querySelectorAll('.active');
    function activeLink(){
        list.forEach((item) =>
        item.classList.remove('frist'));
        this.classList.add('frist');
    }
    list.forEach((item) =>
    item.addEventListener('click',activeLink));