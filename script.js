function mincost(arr) {
  arr.sort((a, b) => a - b);

  let totalCost = 0;

  while (arr.length > 1) {
    let first = arr.shift();
    let second = arr.shift();

    let cost = first + second;
    totalCost += cost;

    let i = 0;
    while (i < arr.length && arr[i] < cost) i++;
    arr.splice(i, 0, cost);
  }

  return totalCost;
}

