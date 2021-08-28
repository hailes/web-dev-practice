
let inputs = document.getElementsByClassName('formulario__input');

for (let i=0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function() {
        // keyup es el evento cuando suelto una tecla.

        if (this.value.length > 0) {
            this.nextElementSibling.classList.add('fijar');
        } else {
            this.nextElementSibling.classList.remove('fijar');
        }
    })
}