function grading(marks){
    let marks = prompt("Enter students marks")
    if (marks<40){
        return "E";
    }
    else if (marks<49 && marks> 40){
        return "D"
    }
    else if (marks<59 && marks> 49){
        return "C"
    }
    else if (marks<79 && marks> 59){
        return "B"
    }
    else if ( marks>79){
        return "A"
    }
    else{
        return "Kindly enter valid marks"
    }
    console.log(`The grade for marks ${marks} is: ${grade}`);
}
grading();

// second challenge
function speedDetector(speed){
    let speed = prompt("detect the peed of the car")

if (speed<70){
    console.log("OK!");
}
else{
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const demeritPoints = Math.floor((speed-speedLimit)/kmPerDemeritPoint);
    if(demeritPoints > 12){
        console.log("licence suspended");
    }
    else{
        console.log(`points:${demeritPoints}`);
    }
}
}

//third challenge
function netSalaryCalculator() {
    let basicSalary = parseFloat(prompt("Enter the basic salary:"));
    let benefits = parseFloat(prompt("Enter the benefits:"));
}
    const grossSalary = basicSalary + benefits;
    const paye = calculatePAYE(grossSalary);
    function calculatePAYE(grossSalary) {
        let paye = 0;
        if (grossSalary <= 24000) {
            paye = grossSalary * 0.1;
        } else if (grossSalary <= 32333) {
            paye = (grossSalary - 24000) * 0.25 + 2400;
        } else {
            paye = (grossSalary - 32333) * 0.30 + 4483.25;
        }
        return paye;
    }
    const nhif = 500;
    const nssf = calculateNSSF(grossSalary);
    function calculateNSSF(grossSalary) {
        const nssfRate = 0.06;
        const nssf = grossSalary * nssfRate;
        return Math.min(nssf, 1080);
    }
    const netSalary = grossSalary - paye - nhif - nssf;
    netSalaryCalculator();

    //add Event listers to the buttons
    

    