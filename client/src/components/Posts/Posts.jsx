import React from 'react'
import { connect } from 'react-redux'


const Posts = () => {
    return (
        <>
            <h1>Posts</h1>
        </>
    );
}









const mapStateToProps = state => ({
    ideas:state.ideaReducer.ideas
})();

export default connect(mapStateToProps)(Posts);

