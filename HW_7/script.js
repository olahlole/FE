// Создать counter.  Страница с параграфом с числом(изначально 0) и  двумя кнопками “+” и “-”  и при нажатии на какую-либо число должно меняться в соответствующую сторону. Значение counter не должно слетать при перезагрузке страницы.

// Получаем элементы DOM
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

// Функция для увеличения значения счетчика
incrementButton.addEventListener('click', () => {
    let count = parseInt(counterElement.innerText, 10);
    count += 1;
    counterElement.innerText = count;
    // Сохраняем значение в локальном хранилище
    localStorage.setItem('counterValue', count);
});

// Функция для уменьшения значения счетчика
decrementButton.addEventListener('click', () => {
    let count = parseInt(counterElement.innerText, 10);
    count -= 1;
    counterElement.innerText = count;
    // Сохраняем значение в локальном хранилище
    localStorage.setItem('counterValue', count);
});

// Проверяем, есть ли значение счетчика в локальном хранилище и устанавливаем его
const savedCount = localStorage.getItem('counterValue');
if (savedCount !== null) {
    counterElement.innerText = savedCount;
}