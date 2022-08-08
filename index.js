const data = [
    { "Name": "HCM: Mens haircut",   "TYPE": "Service", "QTY": "1", "EMPLOYEE": "JKON: Aktas, John", "PRICE": "$30.00" },
    { "Name": "AWPM: Awapui Shampoo",   "TYPE": "Product", "QTY": "1", "EMPLOYEE": "CCHAN: Chan, Chris", "PRICE": "$12.50" },
    { "Name": "PMCO: Paul Mitchell Conditioner",   "TYPE": "Product", "QTY": "1", "EMPLOYEE": "JKON: Aktas, John", "PRICE": "$10.00" }];
    
  window.addEventListener('DOMContentLoaded', () => {
    console.log(data)
    function displayTablet() {
    let output = "";
    for (let i = 0; i < data.length; i++) {
    output += "<tr>"
    + "<td>" + data[i].Name + "</td>"
    + "<td>" + data[i].TYPE + "</td>"  
    + "<td>" + data[i].QTY + "</td>"
    + "<td>" + data[i].EMPLOYEE + "</td>"
    + "<td>" + data[i].PRICE + "</td>"
    +  "</tr>";
  }

  document.getElementById("table1").innerHTML = output

    }
    displayTablet()
  })

  
  
    
    
    