import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions';
class Post extends Component {  

  handleOnClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  }

  render() {
    console.log(this.props);
    const post = this.props.post ? (
      <div className='post'>
        <h4 className='center'>{this.props.post.title}</h4>
        <p className='content'>{this.props.post.title}</p>
        <div className='center'>
          <button className='btn grey' onClick={this.handleOnClick}>
            Delete Post
          </button>
        </div>
      </div>
    ) : (
      <div className="center">Loading page </div>
    );

    return (
      <div className="container">
        {post}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => {
      return post.id === id;
    }),

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch(deletePost(id))
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
