// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  constructor(props) {
    super(props)
    this.state = {isShowing: false}
  }

  onShow = () => {
    const {isShowing} = this.state
    if (isShowing === false) {
      this.setState({isShowing: true})
    }
  }

  onClose = () => {
    const {isShowing} = this.state
    if (isShowing === true) {
      this.setState({isShowing: false})
    }
  }

  render() {
    const {itemDetails} = this.props
    const {questionText, answerText} = itemDetails
    const {isShowing} = this.state
    return (
      <li>
        <div className="con big">
          <div className="con">
            <h1 className="text-que">{questionText}</h1>
            {isShowing ? (
              <button type="button" onClick={this.onClose} className="button">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                  alt="minus"
                  className="icon"
                />
              </button>
            ) : (
              <button type="button" onClick={this.onShow} className="button">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                  alt="plus"
                  className="icon"
                />
              </button>
            )}
          </div>
          {isShowing && (
            <>
              <hr className="hor-line" />
              <p className="text">{answerText}</p>
            </>
          )}
        </div>
      </li>
    )
  }
}
export default FaqItem
