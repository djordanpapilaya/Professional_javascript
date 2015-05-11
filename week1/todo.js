document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submit").addEventListener("click", ClickEvent, true);
});


function ClickEvent(e) {
    e.preventDefault();
    var todoEntery = document.getElementById("newEntery").value;
    var list = document.getElementById("list");
    if (todoEntery.length == 0) {
        console.log('Im empty');
    } else {
        console.log(todoEntery);
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(todoEntery));
        li.setAttribute("class", "list-group-item");
        list.appendChild(li);
        document.getElementById("newEntery").value = null;
    }
}


