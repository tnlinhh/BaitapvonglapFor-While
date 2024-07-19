// Bài 1: In ra 100 chữ 'Hello'
for (let i = 0; i < 100; i++) {
    console.log('Hello');
  }

// Bài 2: Nhập vào N từ prompt. In ra N lần chữ 'Hello'
let N = prompt("Nhập vào số N:");
for (let i = 0; i < N; i++) {
  console.log('Hello');
}

// Bài 3: In ra các số từ 1 đến 1000
for (let i = 1; i <= 1000; i++) {
    console.log(i);
  }

// Bài 4: In ra các số từ a đến b
let a = prompt("Nhập vào số a:");
let b = prompt("Nhập vào số b:");
for (let i = a; i <= b; i++) {
  console.log(i);
}

// Bài 5:  In ra các số từ a đến b, mỗi số trong 1 thẻ <h1>
let a = prompt("Nhập vào số a:");
let b = prompt("Nhập vào số b:");
for (let i = a; i <= b; i++) {
  document.write(`<h1>${i}</h1>`);
}

// Bài 6: In ra các số chẵn từ a đến b
let a = prompt("Nhập vào số a:");
let b = prompt("Nhập vào số b:");
for (let i = a; i <= b; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Bài 7: In ra các số từ a đến b số chẵn trong h2, số lẻ trong h1
let a = prompt("Nhập vào số a:");
let b = prompt("Nhập vào số b:");
for (let i = a; i <= b; i++) {
  if (i % 2 === 0) {
    document.write(`<h2>${i}</h2>`);
  } else {
    document.write(`<h1>${i}</h1>`);
  }
}

// Bài 8: Tính tích các số từ a - b
let a = prompt("Nhập vào số a:");
let b = prompt("Nhập vào số b:");
let product = 1;
for (let i = a; i <= b; i++) {
  product *= i;
}
console.log(product);

// Bài 9: Tính tổng các số chia 5 dư 2 từ a đến b
let a = prompt("Nhập vào số a:");
let b = prompt("Nhập vào số b:");
let sum = 0;
for (let i = a; i <= b; i++) {
  if (i % 5 === 2) {
    sum += i;
  }
}
console.log(sum);

// Bài 10: Đếm các số chia 5 dư 2 từ a đến b
let a = prompt("Nhập vào số a:");
let b = prompt("Nhập vào số b:");
let count = 0;
for (let i = a; i <= b; i++) {
  if (i % 5 === 2) {
    count++;
  }
}
console.log(count);

// Bài 11: In ra màn hình 0, 5, 10, 15, 20, ... 50
for (let i = 0; i <= 50; i += 5) {
    console.log(i);
  }

// Bài 12: In ra màn hình 10, 9, 8, 7, 6, ... 0
for (let i = 10; i >= 0; i--) {
    console.log(i);
  }

// Bài 13: In ra màn hình 50, 45, 40, ... 0
for (let i = 50; i >= 0; i -= 5) {
    console.log(i);
  }

// Bài 14:  In ra bảng cửu chương 5
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
  }
  