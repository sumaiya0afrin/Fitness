function toggleOffcanvas() {
  const menu = document.getElementById("offcanvasMenu");
  const backdrop = document.getElementById("offcanvasBackdrop");
  const isOpen = menu.classList.contains("-translate-x-full");

  if (isOpen) {
    menu.classList.remove("-translate-x-full");
    backdrop.classList.remove("hidden");
  } else {
    menu.classList.add("-translate-x-full");
    backdrop.classList.add("hidden");
  }
}

document.getElementById("calculateBMI").addEventListener("click", function (e) {
  e.preventDefault();

  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;

  const heightInMeter = height / 100;

  const bmi = weight / Math.pow(heightInMeter, 2);

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Healthy";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  const myBMI = document.getElementById("my-bmi");
  myBMI.classList.add("text-[#E6533C]", "md:text-base", "text-xs");

  if (bmi) {
    myBMI.innerText = `Your BMI is ${bmi.toFixed(
      2
    )} and Weight Status is ${category}`;
  } else {
    myBMI.innerText = "Fill up the fields first";
  }

  console.log(bmi.toFixed(2), category);
});
