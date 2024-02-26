function formatDate(inputDate) {
   
    const [day, month, year] = inputDate.split(',').map(item => parseInt(item.trim()));
    
   
    const inputDateObj = new Date(year, month - 1, day); 
    const currentDateObj = new Date();
    
   
    const timeDifference = currentDateObj.getTime() - inputDateObj.getTime();
    
  
    const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25; // 
    const years = Math.floor(timeDifference / millisecondsPerYear);
    const remainingMilliseconds = timeDifference % millisecondsPerYear;
    const millisecondsPerMonth = 1000 * 60 * 60 * 24 * 30.44; // 
    const months = Math.floor(remainingMilliseconds / millisecondsPerMonth);
    const remainingDays = Math.floor((remainingMilliseconds % millisecondsPerMonth) / (1000 * 60 * 60 * 24));


    const formattedOutput = `${years} years, ${months} months, ${remainingDays} days`;

    return formattedOutput;
}


const inputDate = "05, 03, 2000";
const formattedOutput = formatDate(inputDate);
console.log(formattedOutput); 