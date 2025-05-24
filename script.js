
const myBtn4 = document.querySelector('#myBtn4');
const nameInput = document.querySelector("#name")
const nameInput2 = document.querySelector("#name2")
const nameInput3 = document.querySelector("#name3")
const list = document.querySelector('#list');
const model = document.querySelector("#model");
const cenle = document.querySelector("#cenle");
const delButModel = document.querySelector("#del");
const table = document.querySelectorAll('#table');
const total = document.querySelector('#total');
let td;

let sum = 0;



myBtn4.addEventListener('click', Task)


function Task() {
    if (nameInput.value !== "" && nameInput2.value !== "" && nameInput3 !== "") {

        const newItem = document.createElement("li");

        newItem.classList.add('item');

        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'удалить'
        newItem.innerHTML = `
        <h1 class="expense expense-title">${nameInput.value}</h1>
        <p class="expense expense-category">${nameInput3.value}</p>
        <p class="expense expense-category">${nameInput2.value}</p>
        `;

        sum = sum + +nameInput2.value;
        console.log(sum);
        total.textContent = ++sum;

        newItem.appendChild(deleteButton)
        list.appendChild(newItem);

        nameInput.value = '';


        deleteButton.addEventListener('click', () => {
            currentItem = newItem;


            if (currentItem) {
                list.removeChild(currentItem);
                model.style.display = 'none';
                currentItem = null;
            }
        })


    } else {
        alert('Заполните поле');
    }


}









// myBtn4.addEventListener('click', Task2)

// function Task2() {
//     if (nameInput2.value !== "") {

//         const newItem = document.createElement("li");

//         newItem.classList.add('item');

//         const deleteButton = document.createElement('button')
//         deleteButton.textContent = 'удалить'
//         newItem.innerHTML = `<span>${nameInput2.value}</span>`;
//         newItem.appendChild(deleteButton)
//         list.appendChild(newItem);

//         nameInput2.value = '';





//         deleteButton.addEventListener('click', () => {
//             currentItem = newItem;

//             if (currentItem) {
//                 list.removeChild(currentItem);
//                 model.style.display = 'none';
//                 currentItem = null;
//             }
//         })


//     } else {
//         alert('Заполните поле');
//     }


// }








// myBtn4.addEventListener('click', Task3)



// function Task3() {
//     if (nameInput3.value !== "") {

//         const newItem = document.createElement("li");

//         newItem.classList.add('item');

//         const deleteButton = document.createElement('button')
//         deleteButton.textContent = 'удалить'
//         newItem.innerHTML = `<span>${nameInput3.value}</span>`;
//         newItem.appendChild(deleteButton)
//         list.appendChild(newItem);

//         nameInput3.value = '';





//         deleteButton.addEventListener('click', () => {
//             currentItem = newItem;

//             if (currentItem) {
//                 list.removeChild(currentItem);
//                 model.style.display = 'none';
//                 currentItem = null;
//             }
//         })


//     } else {
//         alert('Заполните поле');
//     }


// }

