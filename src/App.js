import Header from "./components/Header";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import React from "react";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        users: [
            {
                id: 1,
                firstname: 'Nicolay',
                lastname: 'Jordan',
                bio:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                age: 23,
                isHappy: true
            },
            {
                id: 2,
                firstname: 'Mike',
                lastname: 'Tyson',
                bio:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                age: 27,
                isHappy: false
            },
        ]
    }
    this.addUser = this.addUser.bind(this)//чтобы в  методе можно было использовать состояния
    this.deleteUser = this.deleteUser.bind(this)
    this.editUser = this.editUser.bind(this)
  }
  render(){
    return (
      <>
      <Header title = 'Список пользователей'/>
      <main>
        <Users users={this.state.users} onDelete={this.deleteUser} onEdit={this.editUser}/>
      </main>
      <aside>
        <AddUser onAdd={this.addUser}/>
      </aside>
      </>
    );
  }

  deleteUser(id){
    this.setState({
      users: this.state.users.filter(el => el.id !== id)
    })
  }

  editUser(user){
    let allUsers = this.state.users
    allUsers[user.id-1] = user

    this.setState({users: []}, () => {
      this.setState({users: [...allUsers]})
    })
  }

  addUser(user){
    const id = this.state.users.length + 1
    this.setState({ users: [...this.state.users, {id, ...user}]})
  }
}

export default App;
