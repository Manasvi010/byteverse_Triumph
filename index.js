function predictPrice() {
    // Get user inputs
    const demand = parseFloat(document.getElementById('demand').value);
    const competition = parseFloat(document.getElementById('competition').value);

    // Perform prediction calculation
    const predictedPrice = demand * competition;
    //apply discount based on condition
    if(demand >= 20 && competition <= 10){
        predictedPrice *=0.8;

    }
    else if (demand <=10 && competition >=20){
        predictedPrice *=1.2;
    }
 
    // Display prediction result
    const predictionResult = document.getElementById('predictionResult');
    predictionResult.innerHTML = `
        <h2>Predicted Price:</h2>
        <p>$${predictedPrice.toFixed(2)}</p>
    `;
}
