import React, { useState, Component } from 'react';



/**컴포넌트(App()도 하나의 컴포넌트)의 첫문자는 대문자로.. */
/**리턴뒤에 소괄호 안에는 하나의 div만 나올 수있다. */
function Modal() {
    return (
        <div className="modal">
            <h2>제목</h2>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}

export default Modal;