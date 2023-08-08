const callapsible = document.querySelectorAll('.callapsible');

callapsible.forEach((item) => {
    item.addEventListener("click", function(){
        this.classList.toggle("callapsible--expanded");
    })
});