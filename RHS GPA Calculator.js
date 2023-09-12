function calculateGPA() {
    let weightedTotal = 0
    let unweightedTotal = 0
    let gradeInputs = document.getElementsByClassName("gradeInputs")
    let weightingInputs = document.getElementsByClassName("weightingInputs")
    for (let i = 0; i < gradeInputs.length; i++) {
        if (weightingInputs[i].checked) {
            weighted = 0.00
        } else {
            weighted = 1.00
        }
        if (+gradeInputs[i].value >= 96.5) {
            weightedTotal += 4.33 + weighted
            unweightedTotal += 4.33
        } else if (+gradeInputs[i].value >= 92.5){
            weightedTotal += 4.00 + weighted
            unweightedTotal += 4.00
        } else if (+gradeInputs[i].value >= 89.5){
            weightedTotal += 3.67 + weighted
            unweightedTotal += 3.67
        } else if (+gradeInputs[i].value >= 86.5){
            weightedTotal += 3.33 + weighted
            unweightedTotal += 3.33
        } else if (+gradeInputs[i].value >= 82.5){
            weightedTotal += 3.00 + weighted
            unweightedTotal += 3.00
        } else if (+gradeInputs[i].value >= 79.5){
            weightedTotal += 2.67 + weighted
            unweightedTotal += 2.67
        } else if (+gradeInputs[i].value >= 76.5){
            weightedTotal += 2.33 + weighted
            unweightedTotal += 2.33
        } else if (+gradeInputs[i].value >= 72.5){
            weightedTotal += 2.00 + weighted
            unweightedTotal += 2.00
        } else if (+gradeInputs[i].value >= 69.5){
            weightedTotal += 1.67 + weighted
            unweightedTotal += 1.67
        } else if (+gradeInputs[i].value >= 66.5){
            weightedTotal += 1.33 + weighted
            unweightedTotal += 1.33
        } else if (+gradeInputs[i].value >= 62.5){
            weightedTotal += 1.00 + weighted
            unweightedTotal += 1.00
        } else if (+gradeInputs[i].value >= 59.5){
            weightedTotal += 0.67 + weighted
            unweightedTotal += 0.67
        } else {
            weightedTotal += 0.00 + weighted
            unweightedTotal += 0.00
        }
    }
    weightedTotal = weightedTotal / gradeInputs.length
    unweightedTotal = unweightedTotal / gradeInputs.length
    document.getElementById("GPAOutput").innerHTML = "Weighted GPA: " + Math.round(Math.round(weightedTotal*100000)/100000*10000)/10000 + " | Unweighted GPA: " + Math.round(Math.round(unweightedTotal*100000)/100000*10000)/10000
}