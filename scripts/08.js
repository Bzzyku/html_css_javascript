const subscribeButton = document.querySelector('.SUBSCRIBE')

const calculateButton = document.querySelector('.calculate');


calculateButton.onclick = () => {

  calculate();
  console.log(Event);
};

document.querySelector('.cost-of-order').addEventListener('keydown', (event) => {
  if(event.key==='Enter'){
    calculate();
  }
})


function calculate () {
  document.querySelector('.cost').innerHTML = 
  Number(document.querySelector('.cost-of-order').value) < 40 ?
  `${Number(document.querySelector('.cost-of-order').value) + 10}$` :
  `${Number(document.querySelector('.cost-of-order').value)}$`;
}

subscribeButton.onclick = () => {
  subscribe();

}

function subscribe(){
  subscribeButton.innerText==='SUBSCRIBE' ?
  subscribeButton.innerText='SUBSCRIBED' :
  subscribeButton.innerText = 'SUBSCRIBE';
  subscribeButton.classList.contains('is-subscribed')?
  subscribeButton.classList.remove('is-subscribed'):
  subscribeButton.classList.add('is-subscribed')
  }