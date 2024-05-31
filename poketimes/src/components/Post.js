import React, { Component } from 'react'
import { connect } from 'react-redux';
class Post extends Component {  
  render() {
    const post = this.props.post ? (
      <div className='post'>
        <h4 className='center'>{this.props.post.title}</h4>
        <p className='content'>{this.props.post.title}</p>
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

export default connect(mapStateToProps)(Post);
