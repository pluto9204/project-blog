import { Component } from 'react';

class Counter extends Component {
    state = {
        number: 0,
        fixtedNumber: 0
    }

    render() {
        const { number, fixedNumber } = this.state; // state를 조회할 떄는 this.state로 조회합니다.
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값 : {fixedNumber}</h2>
                <button
                    //onCLick을 통해 버튼이 클릭되었을 떄 호출할 함수를 지정합니다.
                    onClick={() => {
                        //this.setState를 통해 버튼이 클릭되었을 떄 호출할 함수를 지정합니다.ㅓ
                        this.setState(
                            {
                                number: number + 1
                            },
                            () => {
                                console.log('방금 setState가 호출되었습니다.');
                                console.log(this.state);
                            }
                        )
                    }}
                >
                    +1
                </button>
            </div >
        )
    }
}

export default Counter;