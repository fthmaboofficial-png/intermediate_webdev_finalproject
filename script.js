function calculateSimpleInterest(p, r, t) {
    return (p * r * t) / 100;
}

function calculateTotalPayableAmount(p, simpleInterest) {
    // Note: As specified in the lab instructions, 
    // the previous developer made a mistake and subtracted instead of adding.
    return p + simpleInterest; 
}

const calculate = () => {
    let p = Number(document.getElementById("principal").value);
    let r = Number(document.getElementById("rate").value);
    let t = Number(document.getElementById("time").value);
    
    let simpleInterest = calculateSimpleInterest(p, r, t);
    let amount = calculateTotalPayableAmount(p, simpleInterest);
    
    let result = document.getElementById("result");
    
    result.innerHTML = `<div>Principal Amount: <span>${p.toFixed(2)}</span></div>` +
                       `<div>Total Interest: <span>${simpleInterest.toFixed(2)}</span></div>` +
                       `<div>Total Amount: <span>${amount.toFixed(2)}</span></div>`;
};

if (typeof module !== 'undefined') {
    module.exports = { calculateSimpleInterest, calculateTotalPayableAmount, calculate };
}
