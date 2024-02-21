async function getmeal() {
    const url='https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata'
try {
    const response=  await fetch(url);
    const meal= await response.json();
    console.log(meal);
} 
catch (error) {
    console.log(`error fectching file:`, error)}
    
}

getmeal()