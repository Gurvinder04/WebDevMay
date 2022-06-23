  //INHERITANCE

  class User{
    constructor(username,password){
        this.username = username;
        this.password = password;
        this.users = [];
    }
    getUsers(){
        return this.users;
    }
  }

  class Guest extends User{   //inherit class  with extends
    constructor(role){
        super(role)
        this.role = this.role;
    }
    getUsers(){
        return this.users;
    }

    register(){
        this.users.push({
            username: this.username,
            password: this.password,
            permission: this.permission

        })
  }
}

  class Admin extends User{
    constructor(username,password,permission){
        super(username,password)
        this.permission = permission;
    }
    register(){
        this.users.push({
            username: this.username,
            password: this.password,
            permission: this.permission

        })
    }
  }
  


  let admin1 = new Admin("raj","admin1234","administrator");
  admin1.register();
  console.log(admin1.getUsers());

  let guest1 = new Guest("rao","guest1234","guest1");
  let guest2 = new Guest("ram","guest5678","guest2");
  guest1.register();
  guest2.register();
  console.log(guest1.getUsers());
  console.log(guest2.getUsers());