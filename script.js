let input = document.querySelector("#textbox")
let countTxt = document.querySelector(".count-txt")

function countWords(str) {
  return str.trim().split(/\s+/).filter(word => word !== '').length;
}

function updateCounts() {
  let letterCount = input.value.length;
  let wordCount = countWords(input.value);
  countTxt.innerText = `Word count: ${wordCount} | Letter count: ${letterCount}`;
}
updateCounts();
input.addEventListener('input', updateCounts);

// upper case 
document.querySelector("#hendleUpCase").addEventListener('click', () => {
  input.value = input.value.toUpperCase();
});

// lower case 
document.querySelector("#hendeLowCase").addEventListener('click', () => {
  input.value = input.value.toLowerCase();
});

// capital caase function 
function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}
document.querySelector("#hendleCapCase").addEventListener('click', () => {
  input.value = toTitleCase(input.value);
});

// SentenceCase function  

function toSentenceCase(str) {

  return str
    .split(/([.!?]\s*)/)
    .map((sentence, index) => {
      if (index % 2 === 0) {
        return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
      } else {
        return sentence;
      }
    })
    .join('');
}

document.querySelector("#hendleSenCase").addEventListener('click', () => {
  input.value = toSentenceCase(input.value);
});


// copy function 
document.querySelector("#hendleCopy").addEventListener('click', function () {
  let input = document.querySelector("#textbox");
  navigator.clipboard.writeText(input.value)
  .then(() => {
    alert("Text Coppied");
  })
});


// clear box 
document.querySelector("#hendleClear").addEventListener('click', () => {
  input.value = "";
});



// dark mode 

let darkBtn = document.querySelector("#darkModeSwitch");
let darkCheck = false;
let element = document.querySelector("html");

darkBtn.addEventListener("click", () => {
  if (darkCheck == false) {
    element.style.mixBlendMode = "difference";
    darkCheck = true;
    localStorage.setItem("dark", darkCheck);
    darkBtn.checked = true
  } else {
    element.style.mixBlendMode = "normal";
    darkCheck = false;
    localStorage.setItem("dark", darkCheck);
    darkBtn.checked = false
  }

});

window.addEventListener('load', () => {
  let reDarkCheck = localStorage.getItem('dark')
  console.log(reDarkCheck);
  if (reDarkCheck == "true") {
    element.style.mixBlendMode = "difference";
    darkBtn.checked = true
  } else {
    element.style.mixBlendMode = "normal";
    darkBtn.checked = false
  }
})
