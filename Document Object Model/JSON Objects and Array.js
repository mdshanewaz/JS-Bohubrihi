var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = this.responseText;
        jsonData(data);
    }
};
xmlhttp.open("GET", "data.json", true);
xmlhttp.send();

function jsonData(json_obj) {
    // console.log(json_obj);
    var js_obj = JSON.parse(json_obj);
    // console.log(js_obj);

    for (x in js_obj.persons) {
        // console.log(x);
        // console.log(js_obj.persons[x])
        var person = js_obj.persons;
        console.log(person[x]);

        for (y in person[x]) {
            console.log(person[x][y]);
        }
    }
}