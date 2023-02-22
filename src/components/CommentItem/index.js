// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {eachDetails, isLike, deleteComment} = props
  const {id, isLiked, name, comment, date} = eachDetails
  const timing = formatDistanceToNow(date)

  const clickTheLike = () => {
    isLike(id)
  }

  const deleteCommentItem = () => {
    deleteComment(id)
  }

  const isLikedTheComment = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const initialName = name ? name[0].toUpperCase() : ''

  return (
    <li className="list-name">
      <div className="comment-one-container">
        <div className="initialName">
          <p className="name1">{initialName}</p>
        </div>
        <div>
          <div className="name-container">
            <p className="username">{name}</p>
            <p className="time"> {timing}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="image-container">
        <button type="button" onClick={clickTheLike}>
          <img src={isLikedTheComment} alt="like" />
        </button>
        <button type="button" onClick={deleteCommentItem} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
