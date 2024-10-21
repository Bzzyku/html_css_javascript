const toDoArray = [];
let toDoDisplayArray;
const addButton = document.querySelector('.add');
console.log(addButton);




addButton.onclick = () => {
  addElement();
  displayElement();
};

function addElement () {
  toDoArray.push({
    name: document.querySelector(`.todo`).value,
    date: document.querySelector(`.date`).value
  })
  
  resetInput(`.todo`);
  resetInput(`.date`);
};

function displayElement(){
  let temp=""
  toDoArray.forEach((e) => { 
     temp += `
      <div class ="element">
        <p class="element-name">${e.name}</p>
        <p class="element-date">${e.date}</p>
        <button class="js-button">
        DELETE
        </button>
      </div>`;
  });
  document.querySelector('.elements').innerHTML = temp;

  document.querySelectorAll('.js-button').forEach(
    (element, index) => {
      element.addEventListener('click', () => {
        toDoArray.splice(index, 1)
        displayElement();
      })
    }
  ) 
}

function resetInput(inputClassName){
  document.querySelector(inputClassName).value = ``;
}