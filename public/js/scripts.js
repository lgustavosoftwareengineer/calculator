// Getting the display
    const displayValueNow = document.querySelector("#values")

// Functions
    function botao( num ){

        // Getting the value of the display
        var displayValue = displayValueNow.value;
        // Variable to adds value in the display
        var addValue = document.calc.values;
        // Adding values in the screen
        addValue.value = displayValue + num;

    }
    function reset(){
        // Cleaning the display
        displayValueNow.value =""
    }
    function calcule(){
        var resul = eval(displayValueNow)
        displayValueNow = resul
    }
    function delet(){
        // Deleting the last value of the screen
        displayValueNow.value = displayValueNow.value.slice(0, -1);
    }