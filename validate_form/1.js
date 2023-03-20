window.onload = () => {

    var email = document.getElementById("email");
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    var number = document.getElementById("number");
    const NUMBER_REGEXP = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    var date = document.getElementById("date");
    const DATE_REGEXP = /\d{4}(-|\/)\d{2}\1\d{2}/g;
    var domen = document.getElementById("domen");
    const DOMEN_REGEXP = /^([\wёa-я-]{2,}\.)+[\wёa-я-]{2,}$/i
    var btn = document.getElementsByTagName("button");


    email.oninput = () => {
        if (EMAIL_REGEXP.test(email.value)) {
            email.classList.remove("error")
            email.classList.add("correct");
            if (document.getElementsByClassName("correct").length == 4) { btn[0].disabled = false; }
        }
        else {
            email.classList.remove("correct")
            email.classList.add("error");
        }
    }

    number.oninput = () => {
        if (NUMBER_REGEXP.test(number.value)) {
            number.classList.remove("error")
            number.classList.add("correct");
            if (document.getElementsByClassName("correct").length == 4) { btn[0].disabled = false; }
        }
        else {
            number.classList.remove("correct")
            number.classList.add("error");
        }
    }

    date.oninput = () => {
        if (DATE_REGEXP.test(date.value)) {
            date.classList.remove("error")
            date.classList.add("correct");
            if (document.getElementsByClassName("correct").length == 4) { btn[0].disabled = false; }
        }
        else {
            date.classList.remove("correct")
            date.classList.add("error");
        }
    }

    domen.oninput = () => {
        if (DOMEN_REGEXP.test(domen.value)) {
            domen.classList.remove("error")
            domen.classList.add("correct");
            if (document.getElementsByClassName("correct").length == 4) { btn[0].disabled = false; }
        }
        else {
            domen.classList.remove("correct")
            domen.classList.add("error");
        }
    }

}