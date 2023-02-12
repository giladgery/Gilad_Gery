const carmelinput = document.getElementById("carmelinput");
const carmelimg = document.getElementById("carmelimg");
const galilinput = document.getElementById("GALIL");
const galilimg = document.getElementById("galilimg");
const golaninput = document.getElementById("GOLAN");
const golanimg = document.getElementById("golanimg");
const tzfonnegevinput = document.getElementById("TZFONNEG");
const tzfonnegevimg = document.getElementById("tzfonnegevimg");
const jerusaleminput = document.getElementById("JERUSALEM");
const jerusalemimg = document.getElementById("jerusalemimg");
const centerinput = document.getElementById("CENTER");
const centerimg = document.getElementById("centerimg");
const negevinput = document.getElementById("NEGEV");
const negevimg = document.getElementById("negevimg");
const eilatinput = document.getElementById("EILAT");
const eilatimg = document.getElementById("eilatimg");
const aravainput = document.getElementById("ARAVA");
const aravaimg = document.getElementById("aravaimg");

function clearShadow () {
  carmelimg.style.boxShadow = "0 0 10px white";
  galilimg.style.boxShadow = "0 0 10px white";
  golanimg.style.boxShadow = "0 0 10px white";
  tzfonnegevimg.style.boxShadow = "0 0 10px white";
  jerusalemimg.style.boxShadow = "0 0 10px white";
  centerimg.style.boxShadow = "0 0 10px white";
  negevimg.style.boxShadow = "0 0 10px white";
  eilatimg.style.boxShadow = "0 0 10px white";
  aravaimg.style.boxShadow = "0 0 10px white";
}
carmelinput.addEventListener("change", function() {
  if (this.checked) {
    clearShadow();
    carmelimg.style.boxShadow = "0 0 10px blue";
  }
});

galilinput.addEventListener("change", function() {
  if (this.checked) {
    clearShadow();
    galilimg.style.boxShadow = "0 0 10px blue";
  }
});

golaninput.addEventListener("change", function() {
  if (this.checked) {
    clearShadow();
    golanimg.style.boxShadow = "0 0 10px blue";
  }
});

tzfonnegevinput.addEventListener("change", function() {
  if (this.checked) {
    clearShadow();
    tzfonnegevimg.style.boxShadow = "0 0 10px blue";
  }
});

jerusaleminput.addEventListener("change", function() {
  if (this.checked) {
    clearShadow();
    jerusalemimg.style.boxShadow = "0 0 10px blue";
  }
});
centerinput.addEventListener("change", function() {
  if (this.checked) {
    clearShadow();
    centerimg.style.boxShadow = "0 0 10px blue";
  }
});
negevinput.addEventListener("change", function() {
  if (this.checked) {
    clearShadow();
    negevimg.style.boxShadow = "0 0 10px blue";
  }
});
eilatinput.addEventListener("change", function() {
  if (this.checked) {
    clearShadow();
    eilatimg.style.boxShadow = "0 0 10px blue";
  }
});
aravainput.addEventListener("change", function() {
  if (this.checked) {
    clearShadow();
    aravaimg.style.boxShadow = "0 0 10px blue";
  }
});

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

output.innerHTML = slider.value;
                    
slider.oninput = function() {
    output.innerHTML = this.value;
}

$(document).ready(function () {
    $(".Send_data").click(function (e) {
      if ($("input[type=radio][name=area]:checked").length == 0) {
        return false;
      } else {
        var item = $("input[type=radio][name=area]:checked").val();
        window.setTimeout(function () {

          $("#loading").html("You Selected : " + item);
        }, 600);
  
        $("#loading").html(
          '<br><span class="spinner-border fast"  style="width: 2rem; height: 2rem;color:green;"  role="status"></span>'
        );
      }
    });
  });

  