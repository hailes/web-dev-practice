const inputs = document.querySelectorAll('input');
inputs.forEach( input => {
    // con function tradicional
    input.onfocus = function (){
        input.previousElementSibling.classList.add('top');
        input.previousElementSibling.classList.add('focus');
        input.parentNode.classList.add('focus');
    }
    
    // con arrow function
    input.onblur = () => {
        let contenidoLength = input.value.trim();
        if (contenidoLength == 0) {
            input.previousElementSibling.classList.remove('top');
        }
        input.previousElementSibling.classList.remove('focus');
        input.parentNode.classList.remove('focus');
    }
});