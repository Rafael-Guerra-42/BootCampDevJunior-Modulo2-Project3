indexIncrement = 1;
function AddForm(){
    indexIncrement++;
    document.getElementById("dataInsertion").innerHTML+=
    `
    <div class="row">
        <div class="col-1">${indexIncrement}</div>
        <div class="col-3">${document.getElementById("name").value}</div>
        <div class="col-3">${document.getElementById("email").value}</div>
        <div class="col-3">${document.getElementById("phone").value}</div>
        <div class="col-1">${document.getElementById("categorySelection").value}</div>
        <div class="col-1">${SelectedRadioButton(document.getElementsByName("exampleRadios"))}</div>
    </div>
    <hr>
    `;
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
};
function SelectedRadioButton(radioButton){
    for (let i =0; i<radioButton.length; i++){

        if (radioButton[i].checked){
            return radioButton[i].value;
        }

    }
};

