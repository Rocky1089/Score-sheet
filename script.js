const myform = document.getElementById("form")
const myinp = document.getElementById("inp")
const status = document.getElementById("grade")
const input = document.getElementsByTagName('input')
const math = document.getElementById('inp')

form.addEventListener('submit', (event)=>{
    event.preventDefault()
    if(inp.value > 100){
        alert("math has to be between 0 and 100")
    }
    else if (inp.value>74){
        grade.innerHTML = "A1"
    }
    else if (inp.value>69) {
        grade.innerHTML = "B2"
    }
    else if (inp.value>64) {
        grade.innerHTML = "B3"
    }
    else if (inp.value>59) {
        grade.innerHTML = "C4"
    }
    else if (inp.value>54) {
        grade.innerHTML = "C5"
    }
    else if (inp.value>49) {
        grade.innerHTML = "C6"
    }
    else if (inp.value>44) {
        grade.innerHTML = "D7"
    }
    else if (inp.value>39) {
        grade.innerHTML = "E8"
    }
    else if (inp.value>0) {
        grade.innerHTML = "F9"
    }
    else {
        alert("Maths can't be empty")   
    }
}
)

// const inp1 = document.getElementById('inp1')

form.addEventListener('submit', (event)=>{
    event.preventDefault()
    if(inp1.value > 100){
        alert("English has to be between 0 and 100")
    }
    else if (inp1.value>74){
        grade1.innerHTML = "A1"
    }
    else if (inp1.value>69) {
        grade1.innerHTML = "B2"
    }
    else if (inp1.value>64) {
        grade1.innerHTML = "B3"
    }
    else if (inp1.value>59) {
        grade1.innerHTML = "C4"
    }
    else if (inp1.value>54) {
        grade1.innerHTML = "C5"
    }
    else if (inp1.value>49) {
        grade1.innerHTML = "C6"
    }
    else if (inp1.value>44) {
        grade1.innerHTML = "D7"
    }
    else if (inp1.value>39) {
        grade1.innerHTML = "E8"
    }
    else if (inp1.value>0) {
        grade1.innerHTML = "F9"
    }
    else {
        alert("English can't be empty")   
    }
}
)
form.addEventListener('submit', (event)=>{
    event.preventDefault()
    if(inp2.value > 100){
        alert("Physic has to be between 0 and 100")
    }
    else if (inp2.value>74){
        grade2.innerHTML = "A1"
    }
    else if (inp2.value>69) {
        grade2.innerHTML = "B2"
    }
    else if (inp2.value>64) {
        grade2.innerHTML = "B3"
    }
    else if (inp2.value>59) {
        grade2.innerHTML = "C4"
    }
    else if (inp2.value>54) {
        grade2.innerHTML = "C5"
    }
    else if (inp2.value>49) {
        grade2.innerHTML = "C6"
    }
    else if (inp2.value>44) {
        grade2.innerHTML = "D7"
    }
    else if (inp2.value>39) {
        grade2.innerHTML = "E8"
    }
    else if (inp2.value>0) {
        grade2.innerHTML = "F9"
    }
    else {
        alert("Physic can't be empty")   
    }
}
)
form.addEventListener('submit', (event)=>{
    event.preventDefault()
    if(inp3.value > 100){
        alert("Chemistry has to be between 0 and 100")
    }
    else if (inp3.value>74){
        grade3.innerHTML = "A1"
    }
    else if (inp3.value>69) {
        grade3.innerHTML = "B2"
    }
    else if (inp3.value>64) {
        grade3.innerHTML = "B3"
    }
    else if (inp3.value>59) {
        grade3.innerHTML = "C4"
    }
    else if (inp3.value>54) {
        grade3.innerHTML = "C5"
    }
    else if (inp3.value>49) {
        grade3.innerHTML = "C6"
    }
    else if (inp3.value>44) {
        grade3.innerHTML = "D7"
    }
    else if (inp3.value>39) {
        grade3.innerHTML = "E8"
    }
    else if (inp3.value>0) {
        grade3.innerHTML = "F9"
    }
    else {
        alert("Chemistry can't be empty")   
    }
}
)

form.addEventListener('submit', (event)=>{
    event.preventDefault()
    if(inp4.value > 100){
        alert("Biology has to be between 0 and 100")
    }
    else if (inp4.value>74){
        grade4.innerHTML = "A1"
    }
    else if (inp4.value>69) {
        grade4.innerHTML = "B2"
    }
    else if (inp4.value>64) {
        grade4.innerHTML = "B3"
    }
    else if (inp4.value>59) {
        grade4.innerHTML = "C4"
    }
    else if (inp4.value>54) {
        grade4.innerHTML = "C5"
    }
    else if (inp4.value>49) {
        grade4.innerHTML = "C6"
    }
    else if (inp4.value>44) {
        grade4.innerHTML = "D7"
    }
    else if (inp4.value>39) {
        grade4.innerHTML = "E8"
    }
    else if (inp4.value>0) {
        grade4.innerHTML = "F9"
    }
    else {
        alert("Biology can't be empty")   
    }
}
)