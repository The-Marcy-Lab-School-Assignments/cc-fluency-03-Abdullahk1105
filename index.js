const users = [
    { name: 'Reuben',
      username: '@blood_pressure_killa',
      followers: 1,
      verified: false,
      bio: "It's an honor and a privilege."
    },
    { name: 'Laisha',
      username: '@passaic_papi',
      followers: 700,
      verified: true,
      bio: "My commute is longer than yours."
    },
    { name: 'Anne',
      username: '@i_love_bambas',
      followers: 12,
      verified: false,
      bio: "@mayabee is my best friend"
    },
    { name: 'Steph',
      username: '@queen_of_the_kew',
      followers: 1200,
      verified: false,
      bio: "✌🏼"
    },
    { name: 'Carmen',
      username: '@omar_apollo_fanclub',
      followers: 1200000,
      verified: true,
      bio: "My favorite restaurants are outback steakhouse and buffalo wildwings. My favorite stores are Zara, H&M, and Forever 21."
    }
  ]


  /*
## PEDAC
**Problem**
input: what is the input?
output: what is the output?
What is the task? How would you rephrase the problem in your own words? 

**Examples/Edge Case:** 
Come up with two of your own examples: 
input: example of an input
output: what would the output be for this input?

**Data Structure**
What data structures will we use to solve this problem? 

**Algorithm** 
How will you convert the input to output? 
Try out your algorithm with one of your examples/edge cases. Does it convert the input into the correct output? 

**Code** 
Write your code implementing the algorithm!
*/


const logAllNames = (users) =>{
    users.forEach((user) => console.log(user.name))}

// logAllNames(users)


const getAllTags = (users) =>{
    users.forEach((user) => console.log(`Hi my name is ${user.name}, and my tag is ${user.username}!`))
}

// getAllTags(users)


// const sumAllFollowers = (users) => {
//     return users.reduce((acc, user) => acc + user.followers, 0);
// };

// Destructured
const sumAllFollowers = (users) => {
    return users.reduce((acc, {followers}) => acc + followers, 0);
};

// console.log(sumAllFollowers(users))


const searchUsername = (users, str) => {
   return users.filter((user) => str === user.username);
};

// const searchUsername = (users, str) => {
//     return users.find((user) => str === user.username);
//  };
 

// console.log(searchUsername(users, '@passaic_papi'))

const longWinded = (users) =>{
    return users.reduce(
        (prev, current) => {
          // Changed the > to a <
          if (prev.bio.length > current.bio.length){
            return prev
          }else {
            return current 
          }
        }
      );
}

// console.log(longWinded(users))

const follower = (users) =>{
    return users.toSorted((user) => user.followers)
}

// console.log(follower(users))