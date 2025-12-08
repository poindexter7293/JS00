		
		let heading = document.querySelector("#heading");
		
		//script 한쌍의 선언문 태그 역할 : 자바 스크립트 코드 작성 영역의 태그
				//document.querySelector("#heading")은 HTML 문서에서 원하는 태그(요소)를 찾는 명령어 입니다.
				//#heading은 id가 heading인 <h1 id="heading"> 자바스크립트 <h1> 태그 (요소)를 의미합니다.
				//찾은 요소(h1요소)를 컴퓨터 메모리 중 특정 heading이라는 이름이 부여된 변수(메모리)에 저장합니다.
		

		
		heading.onclick = function( ) {
			// onclick은 사용자가 heading이라는 이름이 부여된 변수(메모리)에 저장된 h1 요소를 클릭했을 때
			//실행되는 동작 (이벤트)를 h1 요소에 등록 할 때 사용하는 예약된 단어 입니다.
			//function(){...}; h1 요소를 사이트 이용자(client)가 클릭 했을 때
			//자동 실행될 구체적인 동작 결과를 담고 있는 콜백 함수 라는 것 입니다.
			//style.color는 글자 색상을 지정하는 속성입니다.
			heading.style.color = "red";
		};