import React, { Component } from 'react'
import axios from 'axios'

export default class UserCreate extends Component {

    state = {
        users: [],
        username: ''
    }

    componentDidMount() {
        this.getUsers();
    }
    getUsers = async () => {
        const user = await axios.get('http://localhost:4000/api/users');
        this.setState({ users: user.data });
    }
    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    onSubmit = async e => {
        e.preventDefault();
        await axios.post('http://localhost:4000/api/users', {
            username: this.state.username
        });
        this.setState({ username: '' });
        this.getUsers();
    }
    deleteUser = async (_id) => {
        const res = await axios.delete(`http://localhost:4000/api/users/${_id}`);
        console.log(res);
        this.getUsers();
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Create New User</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    value={this.state.username}
                                    className="form-control"
                                    onChange={this.onChangeUsername}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-mg-8">
                    <ul className="list-group">
                        {
                            this.state.users.map(user => (
                                <li
                                    className="list-group-item list-group-item-action"
                                    key={user._id}
                                    onDoubleClick={() => this.deleteUser(user._id)}
                                >
                                    {user.username}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
