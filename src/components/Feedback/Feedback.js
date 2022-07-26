import './Feedback.scss'

const Feedback = props => {
  return (
    <div className="Feedback" ref={props.innerRef}>
      <form id="Feedback">
        <div className="unit">
          <iframe
            id="survey"
            title="survey"
            src="https://docs.google.com/forms/d/e/1FAIpQLSd9jIafPT5izB5MDbXqHWNLN5bVeA5B2RMrb8uhPZBq4-BosQ/viewform?embedded=true"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>
      </form>
    </div>
  )
}

export default Feedback
