import Notiflix from 'notiflix';
function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      setTimeout(() => {
        if (shouldResolve) {
          resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
        } else {
          reject(`❌ Rejected promise ${position} in ${delay}ms`);
        }
      }, delay);
    });
}
const form = document.querySelector("form");
form.addEventListener("submit", event=>{
  event.preventDefault();
  let amount = Number(form.elements.amount.value);
  let delay = Number(form.elements.delay.value);
  const step = Number(form.elements.step.value);
  let position = 1;

for(amount, delay, position; amount>0; amount-=1, delay+=step, position+=1){
  createPromise(position, delay)
  .then(() => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(() => {
    Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}
})


