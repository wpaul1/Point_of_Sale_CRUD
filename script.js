const form = document.getElementById("editForm");

function onEdit(){
    form.classList.remove("hideEditForm")
}

function onFormSubmit(){
    var formData = readFormData();

    resetForm();
}

function readFormData(){
    formData = {};
    formData["price"] = document.getElementById("price").value;
    formData["item"] = document.getElementById("item").value;    
}


function resetForm(){
    document.getElementById("price").value = "";
    document.getElementById("item").value = "";
    form.classList.add("hideEditForm")

}