item = ["oat", "kong", "fax", "tle", "teem"];

function addData() {
    let data = document.getElementById("data");
    item.push(data.value);
    data.value = "";
    showItem();
}

function showItem() {
    let showData = document.getElementById("showData");
    showData.innerHTML = "";
    for (let i = 0; i < item.length; i++) {
        let li = document.createElement("li");
        let text = document.createTextNode(item[i]);
        li.appendChild(text);
        li.setAttribute('class','decide');
        li.addEventListener("click", () => {
            DEL(item[i]);
        });
        showData.appendChild(li);
    }
}

function DEL(el) {
    for (let i = 0; i < item.length; i++) {
        if (item[i] === el) {
            console.log(item);
            item.splice(i,1);
            break;
        }
    }
    showItem();
}