// VARIABLES
let button = document.querySelector("input[type='button']");
let changing_button = document.querySelector("button");




// LISTENERS
button.addEventListener("click", print_result);
changing_button.addEventListener("click", change_numeral);





// FUNCTIONS

    // TO ROMAN NUMERAL
function roman_calculator(number) {
    let roman_number = "";
    number = Array.from(number.toString()).reverse();
    let unities = ["I", "X", "C", "M", "(X)", "(C)", "(M)"];
    let five_unities = ["V", "L", "D", "(V)", "(L)", "(D)"];

    for (i = 0; i < number.length; i++) {

        if (number[i] <= 3) {
            for (j = 0; j < number[i]; j++) {
                roman_number = unities[i] + roman_number;
            }

        } else if (number[i] == 4) {
            roman_number = unities[i] + five_unities[i] + roman_number;

        } else if (number[i] == 5) {
            roman_number = five_unities[i] + roman_number;

        } else if (number[i] > 5 && number[i] < 9) {
            for (j = 0; j < Number(number[i]) - 5; j++) {
                roman_number = unities[i] + roman_number;
            }
            roman_number = five_unities[i] + roman_number;


        } else if (number[i] == 9) {
            roman_number = unities[i] + unities[i+1] + roman_number;

        }
    }

    return roman_number;
}

    //TO PRINT
function print_result() {
    let number = document.querySelector("input[type='text']").value;
    let result = document.querySelector(".result_text");
    let result_box = document.querySelector(".result_box");
    let label = document.querySelector("label");

        result_box.classList.add("animated");

    if (label.classList.contains("to_arabic")) {
        result.textContent = arabic_calculator(number.toUpperCase());
        number = roman_corrector(number.toUpperCase());

    } else {

        if (number < 4000000 && Number.isInteger(Number(number)) && number > 0) {
            result.textContent = roman_calculator(number);
        } else {
            result.textContent = "Not a valid number.";
        }
    }

}

    // CHANGE THE CONVERSOR
function change_numeral() {
    let label = document.querySelector("label");
    let number = document.querySelector("input[type='text']");

    number.value = "";
    label.classList.toggle("to_arabic");

    if (label.classList.contains("to_arabic")) {
        label.textContent = "Convert to Arabic Numeral.";

    } else {
        label.textContent = "Convert to Roman Numeral.";

    }
}

    // TO ARABIC NUMERAL
function arabic_calculator(number) {
    let result = 0;
    let arabic_number = [];

    let unitiesA = ["I", "X", "C", "M", "(X)", "(C)", "(M)"];
    let five_unitiesA = ["V", "L", "D", "(V)", "(L)", "(D)"];
    let unities_arabic = [1, 10, 100, 1000, 10000, 100000, 1000000];
    let five_unities_arabic = [5, 50, 500, 5000, 50000, 500000];


    for (i = 0; i < number.length; i++) {
        for (j = 0; j < unitiesA.length; j++) {
            if (number[i] == unitiesA[j]) {
                arabic_number[i] = unities_arabic[j];

            } else if (number[i] == five_unitiesA[j]) {
                arabic_number[i] = five_unities_arabic[j];
            }
        }
    }


    for (i = 0; i < number.length; i++) {
        let operator;

        if (arabic_number[i] < arabic_number[i+1]) {
            operator = arabic_number[i+1] - arabic_number[i];
            result = operator + result;
            i++;



        } else {
            result = arabic_number[i] + result;

        }
    }

    return result;
}




    // CORRECTOR OF ROMAN NUMERAL INPUT
function roman_corrector(number) {
    let arabic_number = [];
    number = Array.from(number);

    let unitiesA = ["I", "X", "C", "M", "(X)", "(C)", "(M)"];
    let five_unitiesA = ["V", "L", "D", "(V)", "(L)", "(D)"];
    let unities_arabic = [1, 10, 100, 1000, 10000, 100000, 1000000];
    let five_unities_arabic = [5, 50, 500, 5000, 50000, 500000];


    for (i = 0; i < number.length; i++) {
        for (j = 0; j < unitiesA.length; j++) {
            if (number[i] == unitiesA[j]) {
                arabic_number[i] = unities_arabic[j];

            } else if (number[i] == five_unitiesA[j]) {
                arabic_number[i] = five_unities_arabic[j];
            }
        }
    }

    console.log(arabic_number);

    
    for (j = 0; j < number.length; j++) {


        for (i = 0; i < number.length; i++) {

        }
    }
}