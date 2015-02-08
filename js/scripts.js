document.getElementById("btn").onclick = function() {
    var child = document.createElement("p");
    child.innerHTML  = "TEST";
    document.getElementById("result").appendChild(child);
    return false;
};