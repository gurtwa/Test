function appendToDisplay(value) {
  var display1Element = document.getElementById('display1');
  display1Element.value += value;
}

function clearDisplay() {
  var display1Element = document.getElementById('display1');
  display1Element.value = '';
  document.getElementById('display').value = '';
}

function calculate() {
  try { 
      var display1Value = document.getElementById('display1').value;
      document.getElementById('display').value = eval(display1Value);
  } catch (error) {
      document.getElementById('display').value = 'Error';
  }
}
