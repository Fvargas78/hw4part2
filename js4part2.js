function calInterest(total_years, balance, rate, table_num) {
    let deposit = 0;
    let table = "<table><tr><th>Year</th><th>Amount on deposit</th><th>Interest Rate</th></tr>";
    for (let year = 1; year <= total_years; year ++){
        deposit = balance * (1+rate)**year
        deposit = deposit.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
        table += "<tr>";
        table += "<td>"+(year)+"</td>";
        table += "<td>"+(deposit)+"</td>";
        table += "<td>"+(rate)+"</td>";
        }
    table += "</table>";
    return document.getElementById("table"+(table_num)).innerHTML = table;
}

calInterest(10, 1000, 0.05, "1");
calInterest(10, 1000, 0.06, "2");
calInterest(10, 1000, 0.07, "3")

$(document).ready(function() {
    $("tr:even").css("background-color", "yellow");
    $("tr:odd").css("background-color", "orange");
});
