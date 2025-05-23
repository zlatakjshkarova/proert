
const myBtn4 = document.querySelector('#myBtn4');
const nameInput = document.querySelector("#name")
const nameInput2 = document.querySelector("#name2")
const nameInput3 = document.querySelector("#name3")
const list = document.querySelector('#list');
const model = document.querySelector("#model");
const cenle = document.querySelector("#cenle");
const delButModel = document.querySelector("#del");




myBtn4.addEventListener('click', Task)













function Task() {
    if (nameInput.value !== "") {

        const newItem = document.createElement("li");

        newItem.classList.add('item');

        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'удалить'
        newItem.innerHTML = `<span>${nameInput.value}</span>`;
        newItem.appendChild(deleteButton)
        list.appendChild(newItem);

        nameInput.value = '';





        deleteButton.addEventListener('click', () => {
            currentItem = newItem;

            model.style.display = 'flex';

        })


    } else {
        alert('Заполните поле');
    }


}

delButModel.addEventListener('click', () => {
    if (currentItem) {
        list.removeChild(currentItem);
        model.style.display = 'none';
        currentItem = null;
    }

})




cenle.addEventListener('click', () => {

    model.style.display = 'none';
    currentItem = null;


})
myBtn4.addEventListener('click', Task2)

function Task2() {
    if (nameInput2.value !== "") {

        const newItem = document.createElement("li");

        newItem.classList.add('item');

        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'удалить'
        newItem.innerHTML = `<span>${nameInput2.value}</span>`;
        newItem.appendChild(deleteButton)
        list.appendChild(newItem);

        nameInput2.value = '';





        deleteButton.addEventListener('click', () => {
            currentItem = newItem;

            model.style.display = 'flex';

        })


    } else {
        alert('Заполните поле');
    }


}

delButModel.addEventListener('click', () => {
    if (currentItem) {
        list.removeChild(currentItem);
        model.style.display = 'none';
        currentItem = null;
    }

})




cenle.addEventListener('click', () => {

    model.style.display = 'none';
    currentItem = null;


})









myBtn4.addEventListener('click', Task3)



function Task3() {
    if (nameInput3.value !== "") {

        const newItem = document.createElement("li");

        newItem.classList.add('item');

        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'удалить'
        newItem.innerHTML = `<span>${nameInput3.value}</span>`;
        newItem.appendChild(deleteButton)
        list.appendChild(newItem);

        nameInput3.value = '';





        deleteButton.addEventListener('click', () => {
            currentItem = newItem;

            model.style.display = 'flex';

        })


    } else {
        alert('Заполните поле');
    }


}

delButModel.addEventListener('click', () => {
    if (currentItem) {
        list.removeChild(currentItem);
        model.style.display = 'none';
        currentItem = null;
    }

})




cenle.addEventListener('click', () => {

    model.style.display = 'none';
    currentItem = null;


})

