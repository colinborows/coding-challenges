function friend(friends){
    let realFriends = friends.filter((name) => name.length == 4)
    return realFriends;
  }