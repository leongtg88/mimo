const maxPoints = 120;
const passingPoints = 70;
const samPoints = 84;
let alexPoints = 45;
const jessiePoints = 99;
let didAlexPass = false;

const samPointsDisplay = "Sam earned " + samPoints + " points out of " +
maxPoints;
console.log(samPointsDisplay);

const alexPointsDisplay = "Alex earned " + alexPoints + " points out of " +
maxPoints;
console.log(alexPointsDisplay);

const jessiePointsDisplay = "Jessie earned " + jessiePoints +
" points out of " + maxPoints;
console.log(jessiePointsDisplay);

const samPercentage = (samPoints / maxPoints) * 100;
const samPercentDisplay = "Sam scored " + samPercentage + "%.";
console.log(samPercentDisplay);

const alexPercentage = (alexPoints / maxPoints) * 100;
const alexPercentDisplay = "Alex scored " + alexPercentage + "%.";
console.log(alexPercentDisplay);

const jessiePercentage = (jessiePoints / maxPoints) * 100;
const jessiePercentDisplay = "Jessie scored " + jessiePercentage + "%.";
console.log(jessiePercentDisplay);

const samMissedPoints = maxPoints - samPoints;
const alexMissedPoints = maxPoints - alexPoints;
const jessieMissedPoints = maxPoints - jessiePoints;
const samMissedPointsDisplay = "Sam missed " + samMissedPoints + " point(s).";
console.log(samMissedPointsDisplay);

const alexMissedPointsDisplay = "Alex missed " + alexMissedPoints +
" point(s).";
console.log(alexMissedPointsDisplay);

const jessieMissedPointsDisplay = "Jessie missed " + jessieMissedPoints +
" point(s).";
console.log(jessieMissedPointsDisplay);

const classAveragePoints = (samPoints + alexPoints + jessiePoints) / 3;
const classAveragePercent = (classAveragePoints / maxPoints) * 100;
const classAvgDisplay = "The class average was " + classAveragePoints +
" points or " + classAveragePercent.toFixed(2) + "%.";
console.log(classAvgDisplay);
alexPoints = 75;
didAlexPass = !didAlexPass;

const listItemArray = document.querySelectorAll("li");

listItemArray[0].innerHTML = "Raw Points:";
listItemArray[4].innerHTML = "Percentages:";
listItemArray[8].innerHTML = "Missed Points:";
listItemArray[12].innerHTML = "Final Notes:";

//... tu código anterior ...

// Actualizar elementos de lista con los puntos crudos
listItemArray[1].textContent = `Sam: ${samPoints}`;
listItemArray[2].textContent = `Alex: ${alexPoints}`;
listItemArray[3].textContent = `Jessie: ${jessiePoints}`;

// Actualizar elementos de lista con los porcentajes
listItemArray[5].textContent = `Sam: ${samPercentage.toFixed(2)}%`;
listItemArray[6].textContent = `Alex: ${alexPercentage.toFixed(2)}%`;
listItemArray[7].textContent = `Jessie: ${jessiePercentage.toFixed(2)}%`;

// Actualizar elementos de lista con puntos perdidos
listItemArray[9].textContent = `Sam missed: ${samMissedPoints}`;
listItemArray[10].textContent = `Alex missed: ${alexMissedPoints}`;
listItemArray[11].textContent = `Jessie missed: ${jessieMissedPoints}`;

// Actualización de los puntos y estatus de aprobación de Alex después de reasignar su puntaje
alexPoints = 75;
didAlexPass = alexPoints >= passingPoints;
listItemArray[2].textContent = `Alex: ${alexPoints}`; // Actualizar el puntaje de Alex
listItemArray[6].textContent = `Alex: ${(alexPoints / maxPoints * 100).toFixed(2)}%`; // Actualizar el porcentaje de Alex
listItemArray[10].textContent = `Alex missed: ${maxPoints - alexPoints}`; // Actualizar los puntos perdidos por Alex
listItemArray[14].textContent = `Did Alex pass? ${didAlexPass ? 'Yes' : 'No'}`; // Añade el estatus de aprobación de Alex