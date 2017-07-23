import React, { Component } from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { showUsers } from '../actions';

class App extends Component {

componentWillMount(){
  this.props.showUsers()
}

renderUsersList(){
  return(
    
  )
}

  render() {
    return (
      <div>
        <h2>Users List</h2>
        <ul>
          {this.renderUsersList()}
        </ul>
      </div>
    );
  }
}


function mapStateToProps(){
    return{
      users: state.user.list
    }
}

export default  connect(mapStateToProps, { showUsers })(App)