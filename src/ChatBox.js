import React from 'react'

class ChatBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '5wO-dE0krT8.E05wzXepX9Q-Y_Iwk-wkvNEvCmxLXlax9kHYFKWgC4w'
    }
}

componentDidMount(){
  document.getElementById('chatbox').style.display = "block";
  window.WebChat.renderWebChat({
        directLine: window.WebChat.createDirectLine({ token: '5wO-dE0krT8.E05wzXepX9Q-Y_Iwk-wkvNEvCmxLXlax9kHYFKWgC4w' }),
        userID: 'YOUR_USER_ID'
      }, document.getElementById('chatbox'));
}

  render() {
    return (
      null
    )
  }
}

export default ChatBox;