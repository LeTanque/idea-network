import React from 'react'
import { connect } from 'react-redux'




class Users extends React.Component {

    render() {
        // console.log(this.state)
        return (
            <>
                <h1>Users</h1>
            </>
        );
    }
}




const mapStateToProps = state => ({
    ideas: state.ideaReducer.ideas
});




export default connect(mapStateToProps)(Users);
  


