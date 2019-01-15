var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
window.onload = function createTableDate() {
    var tableDate = document.getElementById("table__date");
    var date = new Date();
    //create combox month
    for(var i = 1 ; i < 13; i++ ) {
        var option = document.createElement("option");
        option.value = i;
        option.text = month[i-1];
        if((i-1) == date.getMonth()) {
            option.selected = true;
        }
        document.getElementById("cbo__month").appendChild(option);
    }
    //create combox year
    for(var i = (date.getFullYear() - 70) ; i < (date.getFullYear() + 70); i++ ) {
        var option = document.createElement("option");
        option.value = i;
        option.text = i;
        if(i == date.getFullYear()) {
            option.selected = true;
        }
        document.getElementById("cbo__year").appendChild(option);
    }
}
//create day with month year the present
function createCalender() {
    var tableDate = document.getElementById("table__date");
    var date = new Date();
    if( tableDate.style.visibility == "visible"){
        tableDate.style.visibility = "collapse";
        deleteTable();
    }
    else {
        tableDate.style.visibility = "visible";
        var count = 0;
        for(var i = 0 ; i < 6; i++ ) {
            var tr = document.createElement("tr");
            for (var j = 0; j < 7; j++) {
                var td = document.createElement("td");
                td.id = count++;
                tr.appendChild(td);
            }
            tableDate.appendChild(tr);
        }
        printDay("01","01","2019");
    }
}
//@month,@year return number of days in month
function checkMonth (month, year) {
    return new Date(year, month, 0).getDate();
}
function resetTable() {
    for(var i = 0 ; i < 42; i++ ) {
        document.getElementById(i).style.background = "#2d2d2d";
        document.getElementById(i).innerText = '';
        document.getElementById(i).onclick = '';
        document.getElementById(i).value = '';
    }
}
//@day, @month, @year print  number of days in month
function printDay(day, month, year) {
    resetTable();
    var chuoingay = month + "/" + day + "/" + year;
    var date = new Date(chuoingay);
    var datenow = new Date();
    var select_month = document.getElementById("cbo__month").value;
    var select_year = document.getElementById("cbo__year").value;
    countday = 1;
    for(var i = date.getDay() ; i < 42; i++ ) {
        document.getElementById(i).innerText = countday++;
        document.getElementById(i).style.background = "#fff";
        document.getElementById(i).onclick = dayClick;
        document.getElementById(i).value = countday-1;
        if((datenow.getMonth()== (select_month - 1)) && (datenow.getFullYear() == select_year)) {
            if((datenow.getDate()) == countday - 1)
                document.getElementById(i).style.background = "#00ace6";
        }
        if(countday > checkMonth(month,year))
            break;
    }
}
//when combox month year change
function selectMonthAndYearChange() {
    var select_month = document.getElementById("cbo__month").value;
    var select_year = document.getElementById("cbo__year").value;
    printDay("01",select_month,select_year)
}
//when click change date
function giamNam() {
    if(document.getElementById("cbo__year").value == 1949)
        return;
    document.getElementById("cbo__year").value--;
    selectMonthAndYearChange();
}
//when click change date
function giamThang() {
    if(document.getElementById("cbo__month").value == 1)
        return;
    document.getElementById("cbo__month").value--;
    selectMonthAndYearChange();
}
//when click change date
function tangNam() {
    if(document.getElementById("cbo__year").value == 2088)
        return;
    document.getElementById("cbo__year").value++;
    selectMonthAndYearChange();
}
//when click change date
function tangThang() {
    if(document.getElementById("cbo__month").value == 12)
        return;
    document.getElementById("cbo__month").value++;
    selectMonthAndYearChange();
}
//delete row created
function deleteTable() {
    for(var i = 2 ; i < 8; i++)
        document.getElementById("table__date").deleteRow(2);
}
//check value day, month
function checkValueDate(valueDate) {
    if(valueDate < 10)
        return "0"+valueDate;
    return valueDate;
}
//when day click
function dayClick() {
    var select_month = document.getElementById("cbo__month").value;
    var select_year = document.getElementById("cbo__year").value;
    var chuoingay = checkValueDate(this.value) + "/" + checkValueDate(select_month) + "/" + select_year;
    document.getElementById("datetime").value = chuoingay.toString();
    var tableDate = document.getElementById("table__date");
    deleteTable();
    tableDate.style.visibility = "collapse";
}
