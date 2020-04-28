const userInput = document.getElementById('input-num');
const addBtn = document.getElementById('btn-add');
const subBtn = document.getElementById('btn-sub');
const mulBtn = document.getElementById('btn-mul');
const divBtn = document.getElementById('btn-div');

const currentResultOutput = document.getElementById('current-results');
const currentCalculation = document.getElementById('current-calculation');

function outputResult(Result,Text){
    currentResultOutput.textContent = Result;
    currentCalculation.textContent = Text;
}