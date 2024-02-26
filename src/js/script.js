let anosSpan = document.querySelector('.anos>span')
let mesesSpan = document.querySelector('.meses>span')
let diasSpan = document.querySelector('.dias>span')
let vazio = 'É necessário preencher este campo'
let erroData = 'Deve ser válido'
let anoErro = 'Deve estar no passado'
const currentYear = new Date().getFullYear()

function formateDate(Day, Month, Year) {
    const inputDateObj = new Date(Year, Month - 1, Day)
    const currentDateObj = new Date()
    const timeDifference = currentDateObj.getTime() - inputDateObj.getTime();
    // convert 
    const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
    const years = Math.floor(timeDifference / millisecondsPerYear);
    const remainingMilliseconds = timeDifference % millisecondsPerYear;
    const millisecondsPerMonth = 1000 * 60 * 60 * 24 * 30.44;
    const months = Math.floor(remainingMilliseconds / millisecondsPerMonth);
    const remainingDays = Math.floor((remainingMilliseconds % millisecondsPerMonth) / (1000 * 60 * 60 * 24));

    anosSpan.innerHTML = years
    mesesSpan.innerHTML = months
    diasSpan.innerHTML = remainingDays
}



document.getElementById('idadeForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    var Day = document.getElementById('Dia').value;
    var Month = document.getElementById('Mes').value;
    var Year = document.getElementById('Ano').value;
    var error = document.querySelector(".error")
    var label = document.querySelectorAll("label")
    var derror = document.querySelector(".derror")
    var merror = document.querySelector(".merror")
    var yerror = document.querySelector(".aerror")
  

  
    if (Day == "" && Month == "" && Year == "") {
      error.style.color = "red"
      error.innerHTML = empty
     for (const i of label) {
      i.style.color = "red"
      
     }
    
  
    }
  
    if (Day == "") {
      label[0].style.color = "red"
      yerror.style.color = "red"
      derror.style.color = "red"
      derror.innerHTML = empty
   
    }
    if (Day > 31 && Month % 2 == 0 || Month == 2 && Day > 28 || Day > 30) {
      label[0].style.color = "red"
  
      derror.style.color = "red"
      derror.innerHTML = dateerror + " day"
    }
    if (Month > 12) {
      label[1].style.color = "red"
  
      merror.style.color = "red"
      merror.innerHTML = dateerror + " month"
  
  
    }
    if (Year > currentYear) {
      label[2].style.color = "red"
  
      yerror.style.color = "red"
      yerror.innerHTML = yearerror
  
    }
    if (Month == "") {
      label[1].style.color = "red"
  
      merror.style.color = "red"
      merror.innerHTML = empty
    }
  
    if (Year == "") {
      label[2].style.color = "red"
      yerror.style.color = "red"
      yerror.innerHTML = empty
      return false
  
    }
  
  
  
  
  
    console.log('Name:', Day);
    console.log('Month:', Month);
    console.log('Year:', Year);
  
    formateDate(Day, Month, Year)
  
  
  
  
  })


