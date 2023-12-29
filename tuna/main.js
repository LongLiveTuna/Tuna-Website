var menuItem1 = document.getElementById('menu-item-1');
var menuItem2 = document.getElementById('menu-item-2');
var menuItem3 = document.getElementById('menu-item-3');
var menuItem4 = document.getElementById('menu-item-4');
var modal = document.getElementById('modal');

// обработчики клика на пункты меню
menuItem1.addEventListener('click', () => openModal());
menuItem2.addEventListener('click', () => openModal());
menuItem3.addEventListener('click', () => openModal());
menuItem4.addEventListener('click', () => openModal());


// функция открытия модального окна
function openModal() {
 modal.style.display = 'block';
}

// закрытие модального окна при клике вне его области
window.addEventListener('click', (event) => {
 if (event.target == modal) {
  modal.style.display = 'none';
 }
});