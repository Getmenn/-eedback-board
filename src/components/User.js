import React from "react"
import AddUser from "./AddUser";
import {IoCloseCircleOutline} from 'react-icons/io5'
import {IoIosBuild} from 'react-icons/io'

class User extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            editForm: false
        }
    }
    
    user = this.props.user;
    render (){
        return (
            <div className="user">
                <IoCloseCircleOutline onClick={() => this.props.onDelete(this.user.id)}className="delete-icon"/>
                <IoIosBuild onClick={() => {
                    this.setState({
                        editForm: !this.state.editForm
                    })
                }} className="edit-icon" />
                <h3>{this.user.firstname} {this.user.lastname}</h3>
                <p><b>Биография: </b>{this.user.bio}</p>
                <p><b>Возраст: </b> {this.user.age}</p>
                <p><b>{this.user.isHappy ? 'Счастлив)' : 'Грустит('}</b></p>

                {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit}/>}
            </div>
        )
    }
}

export default User