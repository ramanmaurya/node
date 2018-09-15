inames = []
iqty = []
iprice = []

function addpro() {
    inames.push(document.getElementById('pname').value)
    iqty.push(parseInt(document.getElementById('pqty').value))
    iprice.push(parseInt(document.getElementById('price').value))
    display()
}
function display() {
    var cartdata = '<table><tr><th>product name</th><th>quantity</th><th>price</th><th>total</th></tr>';
    total = 0;
    for (i = 0; i < inames.length; i++) {
        total += iqty[i] * iprice[i]
        cartdata += "<tr><td>" + inames[i] + "</td><td>" + iqty[i] + "</td><td>" + iprice[i] + "</td><td>" + total + "</td><td>" + iqty[i] * iprice[i] + "</td><td><button onclick='delElement(" + i + ")'>delete</button></td></tr>"
    }
    cartdata += '<tr><td></td><td></td><td></td><td>' + total + '</td></tr></table>'
    document.getElementById("cart").innerHTML = cartdata
}
function delElement(a) {
    inames.splice(a, 1);
    iqty.splice(a, 1)
    iprice.splice(a, 1)
    display()

}