// 외부 API를 호출하는 자바스크립트 기본 함수
// li fetch : Promise
fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
  .then((response) => {
    // 전달받은 결과를 Text로 변환 -> Promise
    // JSON 타입으로 받은 데이터를 자바스크립트의 Object 로 변환
    // json()
    return response.json();
    // json
    // return(response).
  })
  .then((data) => {
    console.log(data)
  })
console.log('데이터를 다 받고 실행하고 싶어요')  