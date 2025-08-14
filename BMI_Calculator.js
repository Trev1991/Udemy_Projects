function bmi(weight, height) {
    var bmiFormula = weight / (height * height)
    var roundedbmiFormula = Math.round(bmiFormula)
    return roundedbmiFormula;
}


function bmiexplanation(roundedbmiFormula) {

    if (roundedbmiFormula < 18.5) {
        return "Your BMI is " + roundedbmiFormula + ", so you are underweight."
    } else if (roundedbmiFormula >= 18.5 && roundedbmiFormula <= 24.9) {
        return "Your BMI is " + roundedbmiFormula + ", so you have a normal weight."
    } else if (roundedbmiFormula > 24.9)
        return "Your BMI is " + roundedbmiFormula + ", so you are overweight."




}