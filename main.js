/**
 * Tìm số nguyên dương n nhỏ nhất sao cho 1 + 2 + … + n > 10000
*/
document.getElementById("btnTinh").onclick = function() {
  var number = parseInt(document.getElementById("txtSo").value);
  var n = 0;
  var s = 0;
  while(s < number) {
    n++;
    s += n;
  }
  var kq = "<p class='alert alert-success'>Số nguyên dương nhỏ nhất: " + n + "</p>";
  document.getElementById("footerTinh").innerHTML = kq;
}



/**
 * tính tổng: S(n) = x + x^2 + x^3 + … + x^n
*/
document.getElementById("btnTinhTong").onclick = function() {
  var x = parseInt(document.getElementById("txtSoX").value);
  var n = parseInt(document.getElementById("txtSoN").value);
  var t = 1;
  var s = 0;

  for(var i = 1; i <= n; i++) {
    t *= x;
    s += t;
  }
  var kq = "<p class='alert alert-success'>Tổng S là: " + s + "</p>"
  document.getElementById("footerTinhTong").innerHTML = kq;
}



/**
 * Tinh giai thừa
*/
document.getElementById("btnTinhGT").onclick = function() {
  var n = parseInt(document.getElementById("txtSoGT").value);
  var tongGiaiThua = 1;

  for(var i = 1; i <= n; i++) {
    tongGiaiThua *= i;
  }
  var kq = "<p class='alert alert-success'>Tổng n! là: " + tongGiaiThua + "</p>"
  document.getElementById("footerTinhGT").innerHTML = kq;
}



/**
 * Tạo div chẵn lẽ
*/
document.getElementById("btnDiv").onclick = function() {
  var soDiv = document.getElementById("txtSoDiv").value;
  var content = "";

  for(var i = 1; i <= soDiv; i++) {
    if(i%2 == 0) {
      content += "<div class='alert alert-info'>Div chẵn " + i + "</div>";
    } else {
      content += "<div class='alert alert-danger'>Div lẻ " + i + "</div>";
    }
  }
  document.getElementById("footerDiv").innerHTML = content;
}