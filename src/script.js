var todo = [];
document.getElementById("updatebtn").onclick = update;
document.getElementById("addbtn").onclick = add;
//display();


    function getTodo(name) {
        const todoc = todo.filter((v, i) => {
            return v["name"] === name;
        });
        return todoc;
    }

    function add() {
        var name = document.getElementById("new-task");
        if (getTodo(name.value).length == 0) {
            todo.push({ name: name.value, status: 0 });
            name.value = "";
        }
        display();
    }

    function populateField(name) 
    {
        var n = document.getElementById("new-task");
        n.value = name;
        document.getElementById("old-task").value = name;
        document.getElementById("addbtn").style.display = "none";
        document.getElementById("updatebtn").style.display = "block";
    }

    function update() 
    {
        var t = getTodo(document.getElementById("old-task").value);
        t[0].name = document.getElementById("new-task").value;
        document.getElementById("new-task").value = "";
        document.getElementById("addbtn").style.display = "block";
        document.getElementById("updatebtn").style.display = "none";
        display();
    }

    function updateStatus(name, fl) 
    {
        var t = getTodo(name);
        t[0].status = fl;
        display();
    }

    function deleteTodo(name) 
    {
        const todoc = todo.filter((v, i) => {
            return v["name"] !== name;
        });
        todo = todoc;
        display();
    }

    function display() 
    {
        var html = "",
            html1 = "";
        for (var i = 0; i < todo.length; i++) {
            if (todo[i]["status"] == 0) {
            html += `
                    <li><input type="checkbox" onclick="updateStatus('${todo[i].name}', 1)">
                    <label>${todo[i]["name"]}</label>
                    <input type="text">
                    <button class="edit" onclick="populateField('${todo[i].name}')">Edit</button>
                    <button class="delete"  onclick="deleteTodo('${todo[i].name}')">Delete</button></li>`;
            } else {
            html1 += `
                    <li><input type="checkbox"  onclick="updateStatus('${todo[i].name}', 0)" checked>
                    <label>${todo[i]["name"]}</label>
                    <input type="text">
                    <button class="edit" onclick="populateField('${todo[i].name}')" >Edit</button>
                    <button class="delete" onclick="deleteTodo('${todo[i].name}')">Delete</button></li>`;
            }
        }
        document.getElementById("incomplete-tasks").innerHTML = html;
        document.getElementById("completed-tasks").innerHTML = html1;
    }