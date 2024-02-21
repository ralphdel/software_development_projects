console.log(document.getElementById('dollars').value );   


function dollarconvert() {
    let dollarinpt= document.getElementById('dollars').value;
    let covertedamount= dollarinpt * 1200;
    document.getElementById('result').innerText= `Converted amount: ${covertedamount} Naira`;
}

