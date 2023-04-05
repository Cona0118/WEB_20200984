document.getElementById("search_btn").addEventListener('click', search_message);
/*
document : 최상위 문서 
getElementById : 문서의 특정 id를 가져온다 
addEventListener : 이벤트 등록
click : 클릭(이벤트)
search_message : 함수
*/
function search_message(){
	alert("검색을 수행합니다!");
	let search_str = document.querySelector("#search_txt"); // 변수에 저장
	document.getElementById("search_message").innerHTML = search_str.value; // 태그에 값 추가
	console.log(search_str.value); // 콘솔에 출력

}