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

for(let i=1; i<=amount; i+=1){
  createPromise(i, delay)
  .then((result) => {
    Notiflix.Notify.success(result);
  })
  .catch((result) => {
    Notiflix.Notify.warning(result);
  }
 );
 delay+=step;
}
})


