/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';

import Modal from './components/Modal';
import React, { useState } from 'react';

const App = () => {
  return <EventPractice />;
}

/*
function App() {

  let fontExam = { color : 'blue', fontSize : '30px' }; 
  let posts = '강남 고기 맛집';
  function func(){
    return 100
  } 

  let [postName, changePostName] = useState(['남자 코트 추천', '남자 바지 추천']);
  let [coteStyle, changeCoteStyle] = useState(['긴 코트', '짧은 코트', '중간 코트']);
  let [num, numChange] = useState(0);

  function postNameFunc(){
    var newArray = [...postName];
    newArray[0] = '여자 코트 추천';
    changePostName(newArray)
  }

  function listedCoteName() {
    var newArray = [...coteStyle];
    newArray.sort();
    changeCoteStyle(newArray);
  }

  
  return (
      <div className="App">
      <div className="black-nav">
        <div style={ fontExam }>개발 Blog</div>
      </div>
      <button onClick = { postNameFunc }> 제목 변경 버튼</button>
      <h4>{ postName[0] }</h4>
      <h4>{ func() }</h4>
      <img src={ logo } />
      
      
      <button onClick = { listedCoteName }> 리스트 정렬 </button>
      <div className="list">
        <h3> { coteStyle[0] } <span onClick={ () => numChange(num + 1) }>좋아요</span> { num } </h3>
        <p>1월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { coteStyle[1] }</h3>
        <p>1월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { coteStyle[2] }</h3>
        <p>1월 17일 발행</p>
        <hr/>
      </div>

      <Modal/>
    </div>
  );
}
*/

export default App;
