function plusOne() {
    if (document.getElementById("number").value <= 0) {
        document.querySelector('#minusButton').disabled = true;
    } else {
        document.querySelector('#minusButton').disabled = false;
    }
    document.getElementById("number").value++
}

function minusOne() {
    if (document.getElementById("number").value <= 0) {
        document.querySelector('#minusButton').disabled = true;
    } else {
        document.querySelector('#minusButton').disabled = false;
        document.getElementById("number").value--
    }
}