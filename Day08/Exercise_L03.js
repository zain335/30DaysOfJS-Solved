const prompt = require("prompt-sync")({ sigint: true });

const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

/** Task 01 */
let personAccount = {
  firstname: "Zain",
  lastname: "Ali",
  income: {
    20000: "source 1",
    30000: "source 2",
    50000: "source 3",
  },
  expenses: {
    5000: "bill 1",
    10000: "bill 2",
    40000: "bill 3",
  },
  totalIncome: function () {
    return Object.keys(this.income)
      .toString()
      .split(",")
      .map(Number)
      .reduce((a, b) => a + b, 0);
  },
  totalExpenses: function () {
    return Object.keys(this.expenses)
      .toString()
      .split(",")
      .map(Number)
      .reduce((a, b) => a + b, 0);
  },
  accountInfo: function () {
    return `name: ${this.firstname} ${
      this.lastname
    } \nincome: ${this.totalIncome()}\n${this.totalExpenses()}}`;
  },
  addIncome: function (ammount, dis) {
    this.income[ammount] = dis;
  },
  addExpense: function (ammount, dis) {
    this.expenses[ammount] = dis;
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpenses();
  },
};
personAccount.addIncome(35000, "source 4");
personAccount.addExpense(20000, "bill 4");
// console.log(personAccount)
console.log(personAccount.totalExpenses());
console.log(personAccount.totalIncome());
console.log(personAccount.accountBalance());

/** Task 02 (a) */
function signUp() {
  let username = prompt("Enter Username: ");
  let email = prompt("Enter Email: ");
  let password = prompt("Enter Password: ");

  for (const user of Object.values(users)) {
    if (user.email == email && user.password == password) {
      console.log("Account already exist");
      return false;
    }
  }
  const newUser = {
    _id: Math.random().toString(32).substring(2, 8),
    username: username,
    email: email,
    password: password,
    createdAt: new Date().toLocaleString(),
    isLoggedIn: false,
  };
  console.log("Successfully sign up please login to continue");
  return true;
}
// signUp();

/** Task 02 (b) */
function singIn() {
  let email = prompt("Enter Email: ");
  let password = prompt("Enter Password: ");
  for (const user of Object.values(users)) {
    if (user.email == email && user.password == password) {
      console.log("Login Successfully");
      user.isLoggedIn = true;
      return user._id;
    }
  }
  console.log("User not exist Please sign up to continue");
  return -1;
}
// singIn();

/** Task 03 (a)*/
function rateProduct() {
  const id = singIn();
  if (id != -1) {
    const prodName = prompt("Enter product name: ").toLocaleLowerCase();
    let ratings = prompt("Enter rating: ");
    for (const prod of products) {
      if (prod.name.toLocaleLowerCase() == prodName) {
        prod.ratings.push({ userId: id, rate: ratings });
        console.log("Thanks for rating our product");
        return;
      }
    }
    console.log("Product not found");
  } else {
    signUp();
    rateProduct();
  }
}
// rateProduct();
/** Task 03 (b) */
function averageRating() {
  for (const prod of products) {
    sum = 0;
    for (const ratings of prod.ratings) {
      sum += ratings.rate;
    }
    console.log(
      `${prod.name} has average ratings of ${sum / prod.ratings.length}`
    );
  }
}
// averageRating()

/** Task 04 */
function likeProduct() {
  const id = singIn();
  if (id != -1) {
    const prodName = prompt("Enter product name: ").toLocaleLowerCase();
    for (const prod of products) {
      if (prod.name.toLocaleLowerCase() == prodName) {
        if (prod.likes.includes(id)) {
          prod.likes.splice(prod.likes.indexOf(id), 1);
          console.log("Like removed");
          return;
        }
        prod.likes.push(id);
        console.log("Product liked");
        return;
      }
    }
    console.log("Product not found");
  } else {
    signUp();
    likeProduct();
  }
}
likeProduct();
