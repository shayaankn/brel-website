document.addEventListener("DOMContentLoaded", function () {
    var billInput = document.getElementById("billInput");
    var systemSizeDiv = document.getElementById("div-system-size");
    var systemPriceDiv = document.getElementById("div-system-price");
    var annualSavingsDiv = document.getElementById("div-annual-savings");
    var energyGeneratedDiv = document.getElementById("div-energy-generated");

    billInput.addEventListener("input", function () {
        var billAmount = parseFloat(billInput.value);

        if (!isNaN(billAmount)) {
            // Calculate system size, price, annual savings, and energy generated based on bill amount
            var systemSize = (billAmount / 1000).toFixed(1) + " kW";
            var price = (billAmount * 90).toLocaleString("en-IN", { style: "currency", currency: "INR" });
            var annualSavings = (billAmount * 12).toLocaleString("en-IN"); // Assuming annual savings = 12 * monthly bill
            var energyGenerated = (billAmount * 0.65).toFixed(0); // Assuming energy generated = 0.65 * monthly bill

            // Update text content of the divs
            systemSizeDiv.textContent = "System Size: " + systemSize;
            systemPriceDiv.textContent = "Price: " + price;
            annualSavingsDiv.textContent = "Annual Savings: Rs. " + annualSavings;
            energyGeneratedDiv.textContent = "Energy Generated: " + energyGenerated + " units";
        } else {
            // Clear divs if input is not a valid number
            systemSizeDiv.textContent = "System Size: ";
            systemPriceDiv.textContent = "Price:";
            annualSavingsDiv.textContent = "Annual Savings:";
            energyGeneratedDiv.textContent = "Energy Generated:";
        }
    });
});
