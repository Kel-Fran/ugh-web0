import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

import './style.css'


document.querySelector<HTMLButtonElement>('button')!.addEventListener('click', e => {
  e.preventDefault();
  
  document.querySelectorAll<HTMLInputElement>('input').forEach(it => it.value = '')
  document.querySelector<HTMLDivElement>('#alert-success1')!.classList.remove('hidden');
})