
incrementBtn.onclick = function(){
    let increment = document.getElementById("counterValue").textContent;
    localStorage.setItem("clickCount",increment)
    let num = localStorage.getItem("clickCount");
    let updatedval = parseInt(num)+1;
    localStorage.clear()
    localStorage.setItem("clickCount",updatedval);
    document.getElementById("counterValue").textContent = updatedval
    console.log(updatedval);
}