const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

/** Task 01 */
let max = 0;
let skilledUser = {};

for (const user of Object.entries(users)) {
  if (user[1].skills.length > max) {
    max = user[1].skills.length;
    skilledUser.name = user[0];
    skilledUser.skills = user[1].skills;
  }
}
console.log(
  `${skilledUser.name} has highest number of skills that is ${skilledUser.skills.length} `
);

/** Task 02 */
let loggedInUsers = 0;
let having50Points = 0;
for (const user of Object.values(users)) {
  if (user.isLoggedIn) {
    loggedInUsers++;
  }
  if (user.points >= 50) {
    having50Points++;
  }
}
console.log(
  `${loggedInUsers} number of users are currently logged in \n${having50Points} number of users having points equal or greater than 50`
);

/** Task 03 */
let mernDeveloper = [];

for (const user of Object.entries(users)) {
  if (
    user[1].skills.includes("MongoDB") &&
    user[1].skills.includes("Express") &&
    user[1].skills.includes("React") &&
    user[1].skills.includes("Node")
  ) {
    mernDeveloper.push(user[0]);
  }
}
console.log(`MERN developer list : ${mernDeveloper}`);

/** Task 04 */
users.zain = {
  email: "mzainaliofficial@gmail.com",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "Redux",
    "MongoDB",
    "Express",
    "React",
    "Node",
    "Solidity",
    "Java",
    "Python",
  ],
  age: 23,
  isLoggedIn: false,
  points: 100,
};
console.log(users.zain);

/**Task 05 */
console.log(Object.keys(users));

/** Task 06 */
console.log(Object.values(users));

/** Task 07 */
let countries = {
  Pakistan: {
    capital: "Islamabad",
    population: "22M",
    languages: ["Urdu", "Punjabi", "Sindhi", "Pashto", "Seryaki"],
  },
};
console.log(countries);
