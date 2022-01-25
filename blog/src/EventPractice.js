import { Component } from "react";

class EventPractice extends Component {
    state = {
        userName: '',
        message: ''
    }

    //등록한 객체가 바뀌었을 떄 이벤트
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    //등록한 객체를 클릭시 이벤트
    handleClick = () => {
        alert(this.state.userName + ': ' + this.state.message);
        this.setState({
            message: '',
            userName: ''
        });
    }

    //등록한 객체에서 키를 눌렀을 때 이벤트
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="userName"
                    placeholer="사용자명"
                    value={this.state.userName}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="message"
                    placeholer="아무거나 입력해 보세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        )
    }
}

export default EventPractice;