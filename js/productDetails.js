/*Shortcut Paragraph*/
    document.addEventListener("DOMContentLoaded", function() {
    var ellipsisContainers = document.querySelectorAll(".product-title");

    ellipsisContainers.forEach(function(container) {
    var content = container.textContent;

    if (content.length > 45) {
    container.textContent = content.substring(0, 45) + "...";
}
});
});

    /*Dropdown-menu*/
    const dropdown = document.querySelectorAll('.dropdown');
    dropdown.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click',() => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
})

    options.forEach(option => {
    option.addEventListener('click', () => {
    selected.innerText = "Filter: " + option.innerText;
    selected.classList.remove('select-clicked');
    caret.classList.remove('caret-rotate');
    menu.classList.remove('menu-open');
    options.forEach(option => {
    option.classList.remove('active');
});
    option.classList.add('active');
})
})
})
