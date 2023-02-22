// Write your code here
import {Component} from 'react'

import {v4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

class Comments extends Component {
  state = {nameInput: '', commentInput: '', commentList: []}

  onChangeInput = event => {
    this.setState({nameInput: event.target.value})
    console.log(event.target.value)
  }

  onChangeComment = event => {
    this.setState({commentInput: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const newComment = {
      id: v4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      isLiked: false,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  isLike = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachOne => {
        if (id === eachOne.id) {
          return {...eachOne, isLiked: !eachOne.isLiked}
        }
        return eachOne
      }),
    }))
  }

  deleteComment = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.filter(eachOne => eachOne.id !== id),
    }))
  }

  render() {
    const {commentList} = this.state
    console.log(commentList)
    return (
      <div className="container">
        <div className="cd-container">
          <div>
            <h1>Comments</h1>
            <form className="form-container" onSubmit={this.onAddComment}>
              <p>Say something about 4.O technology</p>
              <input
                type="type"
                placeholder="Your Name"
                onChange={this.onChangeInput}
              />
              <br />
              <textarea
                type="text"
                placeholder="Your Comment"
                rows="9"
                cols="50"
                className="text-area"
                onChange={this.onChangeComment}
              />

              <button type="submit" className="btn-text">
                Add Comment
              </button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="image-line"
            />
          </div>
        </div>
        <hr className="line" />
        <p>
          <span>{commentList.length}</span>Comments
        </p>
        <ul className="comment-container">
          {commentList.map(eachOne => (
            <CommentItem
              eachDetails={eachOne}
              key={eachOne.id}
              isLike={this.isLike}
              deleteComment={this.deleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
