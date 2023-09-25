// Создайте массив из объектов. Каждый объект имеет 2 ключа en и ru. В свойстве en написано слово на английском, а в свойстве ru на русском. Необходимо реализовать карточки, при нажатии на которые слова с русского меняются на английский и обратно. Меняете с помощью классов, без innerText!
// Подсказка. В каждой карточке может быть несколько элементов.

const words = [
    { en: "apple", ru: "яблоко" },
    { en: "banana", ru: "банан" },
    { en: "cat", ru: "кот" },

];

const cardsContainer = document.getElementById("cards-container");

// Создаем карточки для каждого слова
words.forEach((word, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    
    const enWord = document.createElement("span");
    enWord.textContent = word.en;
    enWord.classList.add("en");
    
    const ruWord = document.createElement("span");
    ruWord.textContent = word.ru;
    ruWord.classList.add("ru");
    
    card.appendChild(enWord);
    card.appendChild(ruWord);
    
    card.addEventListener("click", () => {
        card.classList.toggle("active");
    });
    
    cardsContainer.appendChild(card);
});