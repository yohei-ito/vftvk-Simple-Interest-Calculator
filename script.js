function compute() {
  // Calc interest
  const principal = document.getElementById("principal").value;
  const rate = document.getElementById("rate").value;
  const years = document.getElementById("years").value;
  var interest = (principal * years * rate) / 100;
  console.log(rate, interest);

  // Calc Actual Year
  var actual_year = new Date();
  actual_year.setFullYear(actual_year.getFullYear() + Number(years));
  console.log(actual_year.getFullYear());

  // Check principal
  var check = Math.sign(document.getElementById("principal").value);
  if (check != "1") {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
    console.log(check);
    return;
  } else {
    console.log(check);
  }

  // Show Result
  const result = document.getElementById("result");
  result.innerHTML =
    "<br>If you deposit <mark>" +
    principal +
    "</mark><br>at an interest rate of <mark>" +
    rate +
    "%</mark><br>You will receive an amount of <mark>" +
    interest +
    "</mark><br>in the year <mark>" +
    actual_year.getFullYear() +
    "</mark>";
}

const inputElem = document.getElementById("rate"); // input要素
const currentValueElem = document.getElementById("current-value"); // 埋め込む先のspan要素
// 現在の値をspanに埋め込む関数
const setCurrentValue = (val) => {
  currentValueElem.innerText = val;
};
// inputイベント時に値をセットする関数
const rangeOnChange = (e) => {
  setCurrentValue(e.target.value);
};
window.onload = () => {
  inputElem.addEventListener("input", rangeOnChange); // スライダー変化時にイベントを発火
  setCurrentValue(inputElem.value); // ページ読み込み時に値をセット
};

function validate() {
  var check = Math.sign(document.getElementById("principal").value);
  if (check != "1") {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
    console.log(check);
  } else {
    console.log(check);
  }
}
