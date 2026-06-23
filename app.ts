type Operator = "+" | "-" | "*" | "/";

const num1Input = document.getElementById("num1") as HTMLInputElement;
const num2Input = document.getElementById("num2") as HTMLInputElement;
const operatorSelect = document.getElementById("operator") as HTMLSelectElement;
const calculateBtn = document.getElementById("calculateBtn") as HTMLButtonElement;
const resetBtn = document.getElementById("resetBtn") as HTMLButtonElement;
const resultDiv = document.getElementById("result") as HTMLDivElement;

function calculate(num1: number, num2: number, operator: Operator): number | string {
  switch (operator) {
    case "+":
      return num1 + num2;

    case "-":
      return num1 - num2;

    case "*":
      return num1 * num2;

    case "/":
      if (num2 === 0) {
        return "0으로 나눌 수 없습니다.";
      }
      return num1 / num2;
  }
}

calculateBtn.addEventListener("click", () => {
  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);
  const operator = operatorSelect.value as Operator;

  if (num1Input.value === "" || num2Input.value === "") {
    resultDiv.textContent = "결과: 숫자를 모두 입력해주세요.";
    return;
  }

  const result = calculate(num1, num2, operator);
  resultDiv.textContent = `결과: ${result}`;
});

resetBtn.addEventListener("click", () => {
  num1Input.value = "";
  num2Input.value = "";
  operatorSelect.value = "+";
  resultDiv.textContent = "결과:";
});
