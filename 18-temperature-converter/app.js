let cel = document.getElementById("cel");
let far = document.getElementById("far");

// Celsius to Fahrenheit
cel.addEventListener("input", function () {
    let c = parseFloat(this.value);
    if (isNaN(c)) {
        far.value = "";
        return;
    }
    let f = (c * 9 / 5) + 32;
    far.value = f.toFixed(1);
});

// Fahrenheit to Celsius
far.addEventListener("input", function () {
    let f = parseFloat(this.value);
    if (isNaN(f)) {
        cel.value = "";
        return;
    }
    let c = (f - 32) * 5 / 9;
    cel.value = c.toFixed(1);
});
