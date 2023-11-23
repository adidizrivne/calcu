document.getElementById("calculate").addEventListener("click", function () {
  const hours = parseFloat(document.getElementById("hours").value);
  const rank = parseFloat(document.getElementById("rank").value);
  const discipline = document.getElementById("discipline").checked ? 0.1 : 0;
  const productivity = parseFloat(document.getElementById("productivity").value);
  const nightHours = parseFloat(document.getElementById("nightHours").value);

  const hourlyRate = 68.00;

  // Розрахунок для денних годин
  const sum1 = hours * hourlyRate;
  const sum2 = sum1 * rank;
  const sum3 = sum1 * discipline;
  const sum4 = sum1 * productivity;

  const totalDayHours = sum1 + sum2 + sum3 + sum4;

  // Розрахунок для нічних годин
  const nightRate = hourlyRate * 0.10812293;
  const sum5 = nightHours * nightRate;
  const sum6 = sum5 * rank;
  const sum7 = sum5 * discipline;
  const sum8 = sum5 * productivity;

  const totalNightHours = sum5 + sum6 + sum7 + sum8;

  // Сума денних і нічних годин
  const fullHours = hours + nightHours;

  // Загальна заробітна плата
  const totalPayment = totalDayHours + totalNightHours;

  // Ціна за годину
  const hoursMoney = totalPayment / fullHours;

  // Оновлення результатів на сторінці
  document.getElementById("result").textContent = totalPayment.toFixed(2) + " грн";
  document.getElementById("full").textContent = fullHours.toFixed(2) + " годи";
  document.getElementById("money").textContent = hoursMoney.toFixed(2) + " грн/год";
});
