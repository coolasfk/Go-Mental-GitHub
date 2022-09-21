const entryFormDateOfBirthYearLabel = document.querySelector(".entry-form__date-of-birth__div__YY__label");
const entryFormEnterYear = document.querySelector(".entry-form__date-of-birth__div__YY__enter-year");
const entryFormArrowStepUpYY = document.querySelector (".entry-form__date-of-birth__div__YY__step-up");
const entryFormArrowStepDownYY = document.querySelector (".entry-form__date-of-birth__div__YY__step-down");
const entryFormArrowStepDownDD = document.querySelector (".entry-form__date-of-birth__div__DD__step-down");
const entryFormArrowStepUpDD = document.querySelector (".entry-form__date-of-birth__div__DD__step-up");
const entryFormEnterDayInput = document.querySelector(".entry-form__date-of-birth__div__DD__enter-day");
const entryFormEnterMonthDiv = document.querySelector(".entry-form__date-of-birth__div__MM__div");
const entryFormToggle = document.querySelector(".entry-form__gender-toggle__div__input");

// I am trying to prevent toggle checkbox from reloading the page; but this doesn't work ;/
//entryFormToggle.addEventListener('click', function(e) {
// e.preventDefault()
//})


// I wanna make year label disappear after the click
entryFormEnterMonthDiv.addEventListener('click', () => {
    document.querySelector(".entry-form__date-of-birth__div__MM__label").style.display = "none"
    document.querySelector(".entry-form__date-of-birth__div__MM__select").style.display = "flex"
    document.querySelector(".entry-form__date-of-birth__div__MM__arrows").style.display = "none"
})


// connecting input arrows with my custom arrows
entryFormArrowStepUpYY.addEventListener('click', () => {
    entryFormEnterYear.stepUp()

})


// enter day date input form

entryFormEnterDayInput.value = ''

entryFormArrowStepDownDD.addEventListener('click', () => {
    document.querySelector(".entry-form__date-of-birth__div__DD__label").style.display = "none"
    
})
entryFormArrowStepUpDD.addEventListener('click', () => {
    document.querySelector(".entry-form__date-of-birth__div__DD__label").style.display = "none"
})


//setting default value for day date form

var setDefaultDay = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            entryFormEnterDayInput.value = '15'
        }
    };
})();
    
entryFormArrowStepUpDD.addEventListener('click', setDefaultDay);
entryFormArrowStepUpDD.addEventListener('click', setDefaultDay);




let focusOut = false






entryFormArrowStepUpYY.addEventListener('click', change)


//setting default value for year date form

var setDefaultYear = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            entryFormEnterYear.value = '1990'
        }
    };
})();
    
entryFormArrowStepUpYY.addEventListener('click', setDefaultYear);
entryFormArrowStepUpYY.addEventListener('click', setDefaultYear);



entryFormArrowStepDownYY.addEventListener('click', change)
entryFormEnterYear.addEventListener('blur', change)
entryFormEnterYear.addEventListener('focus', change)
entryFormEnterYear.addEventListener('input', change)

entryFormEnterYear.value = ''


function change(e){

    if(e.type === "blur") {
       focusOut = true
      // entryFormDateOfBirthYearLabel.style.display = "flex"
    } else if (e.type !== "blur") {
        entryFormDateOfBirthYearLabel.style.display = "none"
        focusOut = false
    
    }
   

}

console.log(entryFormEnterYear.value)