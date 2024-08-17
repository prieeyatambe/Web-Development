document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input_num');
    const buttons = Array.from(document.querySelectorAll('button'));
  
    let currentInput = '';
    let operator = '';
    let previousInput = '';
  
    const updateDisplay = (value) => {
      input.value = value;
    };
  
    const clearInput = () => {
      currentInput = '';
      previousInput = '';
      operator = '';
      updateDisplay('0');
    };
  
    const deleteLastCharacter = () => {
      currentInput = currentInput.slice(0, -1);
      updateDisplay(currentInput || '0');
    };
  
    const handleOperator = (op) => {
      if (currentInput === '') return; // Do nothing if current input is empty
      if (previousInput !== '') {
        compute(); // Compute if there's already an operator
      }
      operator = op;
      previousInput = currentInput;
      currentInput = '';
    };
  
    const compute = () => {
      if (previousInput === '' || currentInput === '' || operator === '') return; // Ensure there's something to compute
      try {
        // Use a safe expression evaluation approach
        const expression = `${parseFloat(previousInput)} ${operator} ${parseFloat(currentInput)}`;
        const result = eval(expression);
        if (!isFinite(result)) throw new Error('Math error');
        currentInput = result.toString();
        updateDisplay(currentInput);
        previousInput = '';
        operator = '';
      } catch (error) {
        updateDisplay('Error');
        currentInput = '';
        previousInput = '';
        operator = '';
      }
    };
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
  
        switch (value) {
          case 'C':
            clearInput();
            break;
          case 'DEL':
            deleteLastCharacter();
            break;
          case '=':
            compute();
            break;
          case '+':
          case '-':
          case '*':
          case '/':
          case '%':
            handleOperator(value);
            break;
          default:
            // Handle number and decimal input
            if (value === '.' && currentInput.includes('.')) return; // Prevent multiple decimals
            currentInput += value;
            updateDisplay(currentInput);
            break;
        }
      });
    });
  });
  
// theme
const body=document.querySelector('body');
const divElement=document.getElementsByTagName('div');
const toggleElement=document.getElementById('toggleDark');
const inputElement=document.getElementById('input_num')

toggleElement.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
       body.style.backgroundColor='darkgray';
       divElement.style.backgroundColor='darkgray';
       body.style.transition = '2s';
       divElement.style.transition = '2s';
    }else{
        body.style.backgroundColor='white';
        divElement.style.backgroundColor='white';
        body.style.transition = '2s';
        divElement.style.transition = '2s';
    }
});

