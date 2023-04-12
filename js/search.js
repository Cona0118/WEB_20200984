document.getElementById("search_btn").addEventListener('click', search_message);
/*
document : 최상위 문서 
getElementById : 문서의 특정 id를 가져온다 
addEventListener : 이벤트 등록
click : 클릭(이벤트)
search_message : 함수
*/
let F_word1 = "fuck";
let F_word2 = "시발";
let F_word3 = "개새끼";

function search_message(){
	let search_str = document.querySelector("#search_txt"); // 변수에 저장
		if(search_str.value.length === 0){ // 문자 길이, 엄격한 비교 / === -> 값 + 자료형 비교
			alert("검색어가 비었습니다. 입력해주세요");
		}
		else{
			if(search_str.value === F_word1,F_word2,F_word3){
			alert(search_str.value+"은(는) 검색할 수 없습니다.");
			}
			else{
			alert("검색을 수행합니다!");
			let text = document.getElementById("search_message").innerHTML = search_str.value;
			document.querySelector("#form_main").submit();
			document.getElementById("search_message").innerHTML = search_str.value; // 태그에 값 추가
			}
		}
	console.log(search_str.value); // 콘솔에 출력

}