const getUsersWithFriend = (users, friendName) => {
    
    const haveFriend = users.filter(user => user.friends.includes(friendName));

    return haveFriend;
}

const allUsers2 = [
    {
        name: "Moore Hensley",
        friends: ["Sharron Pace"]
    },
    {
        name: "Sharlene Bush",
        friends: ["Briana Decker", "Sharron Pace"]
    },
    {
        name: "Ross Vazquez",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
    },
    {
        name: "Elma Head",
        friends: ["Goldie Gentry", "Aisha Tran"]
    },
    {
        name: "Carey Barr",
        friends: ["Jordan Sampson", "Eddie Strong"]
    },
    {
        name: "Blackburn Dotson",
        friends: ["Jacklyn Lucas", "Linda Chapman"]
    },
    {
        name: "Sheree Anthony",
        friends: ["Goldie Gentry", "Briana Decker"]
    }
];

console.log(getUsersWithFriend(allUsers2, "Briana Decker")); 
console.log(getUsersWithFriend(allUsers2, "Goldie Gentry"));
console.log(getUsersWithFriend(allUsers2, "Adrian Cross" )); 