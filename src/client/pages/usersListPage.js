import React from "react";
import {fetchUsers} from "../actions";
import {connect} from "react-redux";


class UsersListPage extends React.Component{

    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers(){
        return this.props.users.map(user=>{
            return <li key={user.id}>{user.name}</li>
        })
    }

    render(){
        return (
            <div>
                Here's a big list of users
                <ul>
                {
                    this.renderUsers()
                }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state=>{
    return{
        users:state.users
    }
}
const loadData = (store)=>{
    return store.dispatch(fetchUsers());
}

export default {
    loadData,
    component:connect(mapStateToProps,{fetchUsers})(UsersListPage)
};