function $(id) {
  return document.getElementById(id);
}

//hàm kiểm tra số nguyên tố
function timSoNguyenTo(number) {
  var flag = true;

  if(number < 2) {
    return flag = false;
  }
  var i = 2;
  while(i < number) {
    if(number % i == 0) {
      flag = false;
      break;
    }
    i++;
  }
  return flag;
}


/**
 * In ra các số nguyên tố từ 1 tới giá trị của ô input
*/
$("btnTinh").onclick = function() {
  var number = $("txtSo").value;
  var content = "";
  for(var j = 2; j <= number; j++) {
    var soNguyenTo = timSoNguyenTo(j);
    if(soNguyenTo) {
      content += j + " ";
    }
  }
  $("footerTinh").innerHTML = content;
}