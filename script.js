let input = document.querySelector("#textbox");
let countTxt = document.querySelector(".count-txt");

function countWords(str) {
    return str.trim().split(/\s+/).filter(word => word !== '').length;
}

function updateCounts() {
    let letterCount = input.value.length;
    let wordCount = countWords(input.value);
    countTxt.innerText = `Word count: ${wordCount} | Letter count: ${letterCount}`;
}

// Initial count update
updateCounts();

// Update counts on input change
input.addEventListener('input', updateCounts);

// Upper case
document.querySelector("#handleUpCase").addEventListener('click', () => {
    input.value = input.value.toUpperCase();
    updateCounts();
});

// Lower case
document.querySelector("#handleLowCase").addEventListener('click', () => {
    input.value = input.value.toLowerCase();
    updateCounts();
});

// Title case
function toTitleCase(str) {
    return str.replace(/\w\S*/g, text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase());
}
document.querySelector("#handleCapCase").addEventListener('click', () => {
    input.value = toTitleCase(input.value);
    updateCounts();
});

// Sentence case
function toSentenceCase(str) {
    return str.split(/([.!?]\s*)/).map((sentence, index) => {
        if (index % 2 === 0 && sentence.length > 0) {
            return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
        }
        return sentence;
    }).join('');
}
document.querySelector("#handleSenCase").addEventListener('click', () => {
    input.value = toSentenceCase(input.value);
    updateCounts();
});

// Copy to clipboard
document.querySelector("#handleCopy").addEventListener('click', () => {
    input.select();
    if (navigator.clipboard) {
        navigator.clipboard.writeText(input.value).then(() => {
            alert('Text copied to clipboard');
        }, err => {
            console.error('Failed to copy: ', err);
        });
    } else {
        document.execCommand('copy');
        alert('Text copied to clipboard');
    }
});

// Clear textbox
document.querySelector("#handleClear").addEventListener('click', () => {
    input.value = "";
    updateCounts();
});
