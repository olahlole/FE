// Написать скрипт, который выводит списки с товарами в интерфейс (на основе массива с объектами).Внизу каждого списка выводится итоговая сумма каждого товара.
// А так же в самом конце выводится итоговая сумма и количество всех товаров.

// const products = [
//     {
//       title: "BMW",
//       price: 40000,
//       count: "15",
//     },
//     {
//       title: "Toyota",
//       price: 20000,
//       count: "13",
//     },
//     {
//       title: "Ford",
//       price: 30000,
//       count: "20",
//     },
//     {
//       title: "Chevrolet",
//       price: 60000,
//       count: "9",
//     },
//     {
//       title: "Volkswagen",
//       price: 30000,
//       count: "13",
//     },
//   ];

//   const productList = document.getElementById("product-list");
//   const totalPrice = document.getElementById("total-price");
//   const totalCount = document.getElementById("total-count");

//   let totalSum = 0;
//   let totalQuantity = 0;

//   products.forEach(product => {
//     const listItem = document.createElement("li");
//     listItem.textContent = `${product.title} - Цена: ${product.price} - Количество: ${product.count}`;
//     productList.appendChild(listItem);

//     const productSum = product.price * product.count;
//     totalSum += productSum;
//     totalQuantity += +product.count;  // строчку привела к числу+
// });

// totalPrice.textContent = totalSum;
// totalCount.textContent = totalQuantity;

// <!-- ------------3------------- -->


// 3)Дан массив из объектов, в котором хранятся породы собак и их возраст. Напишите цикл, который создаст для каждого объекта параграфы(Пример как должен выглядеть вывод первого объекта:golden retriever's age is 7 ) и добавит в body.

// const dogs =

// [
//     {
//       breed: "golden retriever",
//       age: 7,
//     },
//     {
//       breed: "labrador retriever",
//       age: 4,
//     },
//     {
//       breed: "french bulldog",
//       age: 12,
//     },
//     {
//       breed: "beagle",
//       age: 6,
//     },
//     {
//       breed: "german shepherd dog",
//       age: 2,
//     },
//     {
//       breed: "poodle",
//       age: 3,
//     },
//     {
//       breed: "bulldog",
//       age: 4,
//     },
// ];
//  const dogInfo = document.getElementById("dogInfo");

//  for (const dog of dogs) {
//     const paragraph = document.createElement("p");
//     paragraph.textContent = `${dog.breed}'s age is ${dog.age}`;
//     dogInfo.appendChild(paragraph);
//  }


// <!-- ------------------4------------------ -->

// 4)Создайте список с названиями фильмов и годов их выпуска из массива объектов. Массив с объектами создавать самому. Каждый объект должен иметь два ключа – name, year.

// const films = [
//     {
//         name: "Game of Thrones",
//         year: 2022,
//     },
//     {
//         name: "Clown",
//         year: 2011,
//     },
//     {
//         name: "Bakery",
//         year: 1989,
//     },
// ];

// const filmInfo = document.getElementById("listOfFilms");

// for (const film of films) {
//     const paragraph = document.createElement("p");
//     paragraph.textContent = `${film.name} release ${film.year}`;
//     filmInfo.appendChild(paragraph);
// }

// <!-- -------------------2----------------------->
// Напишите скрипт, который выводит в интерфейс следующую таблицу(html должен быть пустым, все элементы создаются строго с помощью скриптов):

// let developers = [
//         {
//           name: "Bill Gates",
//           position: "Founder Microsoft",
//           salary: 1000,
//         },
//         {
//           name: "Steve Jobs",
//           position: "Founder Apple",
//           salary: 1200,
//         },
//         {
//           name: "Larry Page",
//           position: "Founder Google",
//           salary: 1100,
//         },
//         {
//           name: "Mark Zuckeberg",
//           position: "Founder Fecebook",
//           salary: 1300,
//         },
//       ];

// let titleH1 = document.createElement('h1'); // заголовок название 
// titleH1.textContent = "Список сотрудников";
// document.body.append(titleH1);
// let tableProgrammers = document.createElement('table'); // контейнер для хранения таблицы
// let tableTitle = document.createElement('thead')  // строка заголовка таблицы 
// let titleContent = ["No.", "Full Name", "Position", "Salary"];
// for(let i = 0; i < titleContent.length; i++){
//   let titleTh = document.createElement('th'); //ячейка строки заголовка таблицы  
//   titleTh.textContent = titleContent[i]; // добавляем текст в переменную 
//   titleTh.classList.add('table-th'); // добавили класс к элементу 
//   tableTitle.appendChild(titleTh); // добавляем ячейку заголовка таблицы в строку заголовка таблицы
// } 
// tableProgrammers.appendChild(tableTitle); // добовляем заголовок таблицы в таблицу 
// document.body.append(tableProgrammers); // выводим таблицу на экран

let developers = [
    {
        name: "Bill Gates",
        position: "Founder Microsoft",
        salary: "$1000",
    },
    {
        name: "Steve Jobs",
        position: "Founder Apple",
        salary: "$1200",
    },
    {
        name: "Larry Page",
        position: "Founder Google",
        salary: "$1100",
    },
    {
        name: "Mark Zuckerberg",
        position: "Founder Facebook",
        salary: "$1300",
    },
];

let titleH1 = document.createElement('h1');
titleH1.textContent = "Список сотрудников";
document.body.append(titleH1);

//Создаем заголовок таблицы (table) и его строку заголовка (thead).
let tableProgrammers = document.createElement('table');  // создает новый HTML-элемент table, который будет представлять собой таблицу в вашем документе. Этот элемент представляет собой контейнер для всех данных таблицы.
let tableTitle = document.createElement('thead');  //создает новый HTML-элемент thead, который представляет собой заголовок таблицы. Этот элемент будет содержать строку заголовка и определит, что будет отображаться в верхней части вашей таблицы.
let titleContent = ["No.", "Full Name", "Position", "Salary"]; //- это массив, содержащий заголовки столбцов вашей таблицы. В данном случае, у вас есть четыре заголовка: "No." (номер), "Full Name" (полное имя), "Position" (должность) и "Salary" (зарплата).
for (let i = 0; i < titleContent.length; i++) {  //алее, в цикле for, вы создаете ячейки заголовка (th) для каждого элемента массива titleContent.
    let titleTh = document.createElement('th');// Создаем элемент th (ячейка заголовка),Создается новый элемент th для каждого заголовка.
    titleTh.textContent = titleContent[i];// Устанавливаем текст внутри ячейки заголовка,Заголовок из массива titleContent присваивается текстовому содержанию ячейки (textContent).
    // titleTh.classList.add('table-th');
    // Добавляем класс 'table-th' для стилизации (необязательно)Добавляется класс table-th к каждой ячейке заголовка (это может быть использовано для стилизации CSS).
    
    tableTitle.appendChild(titleTh);// Добавляем ячейку заголовка в строку заголовка,Ячейка заголовка добавляется в thead с помощью tableTitle.appendChild(titleTh).

}
tableProgrammers.appendChild(tableTitle);

// в результате выполнения этого кода, у вас будет создан элемент table с заголовком (thead), который будет использоваться для отображения заголовков столбцов в таблице.

// Этот участок кода отвечает за создание строк данных и их добавление в таблицу.
let tableBody = document.createElement('tbody'); // Создаем тело таблицы // Создаем тело таблицы - здесь создается элемент tbody (тело таблицы). Этот элемент будет содержать все строки данных таблицы.

for (let i = 0; i < developers.length; i++) { //Далее, в цикле for, вы перебираете массив developers, который содержит данные о сотрудниках. Для каждого сотрудника создается строка данных (<tr>).
    
    let rowData = developers[i]; //получает данные для текущего сотрудника из массива.
    let row = document.createElement('tr'); // Создаем строку данных ,создает новый элемент tr (строка данных) для текущего сотрудника.
    
    //Для каждой строки данных создаются ячейки данных (<td>) для каждого столбца данных:
    let cellNo = document.createElement('td');
    cellNo.textContent = i + 1; 
    // Номер сотрудника  - создает ячейку для номера сотрудника.
    row.appendChild(cellNo); //добавляет ячейку номера сотрудника в текущую строку данных.
    
    //Аналогичные шаги выполняются для ячеек "Full Name" (полное имя), "Position" (должность) и "Salary" (зарплата), где данные берутся из объекта rowData.
    let cellName = document.createElement('td');
    cellName.textContent = rowData.name;
    row.appendChild(cellName);
    
    let cellPosition = document.createElement('td');
    cellPosition.textContent = rowData.position;
    row.appendChild(cellPosition);
    
    let cellSalary = document.createElement('td');
    cellSalary.textContent = rowData.salary;
    row.appendChild(cellSalary);
    
    
    tableBody.appendChild(row); // Добавляем строку в тело таблицы, добавляет текущую строку данных в тело таблицы. Это делается для каждого сотрудника, чтобы добавить все строки данных в таблицу.
}

tableProgrammers.appendChild(tableBody); // Добавляем тело таблицы в таблицу, после завершения цикла for, tableBody (тело таблицы) добавляется в основную таблицу tableProgrammers с помощью tableProgrammers.appendChild(tableBody);. Это создает завершенную таблицу с заголовком и данными.
document.body.append(tableProgrammers); //Добавляет всю таблицу на страницу, чтобы она была видна пользователю.



