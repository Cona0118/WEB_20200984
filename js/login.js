function addJavascript(jsname) { // 자바스크립트 외부 연동
	var th = document.getElementsByTagName('head')[0];
	var s = document.createElement('script');
	s.setAttribute('type','text/javascript');
	s.setAttribute('src',jsname);
	th.appendChild(s);
}
addJavascript('/js/security.js'); // 암복호화 함수
addJavascript('/js/session.js'); // 세션 함수
addJavascript('/js/cookie.js'); // 쿠키 함수

function login() {
    let form = document.querySelector("#form_main");
    let id = document.querySelector("#floatingInput");
    let password = document.querySelector("#floatingPassword");
    let check = document.querySelector("#idSaveCheck");
    form.action = "../index_login.html";
    form.method = "get";
    var id_check = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    var pass_check = /^(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    var id_result = id_check.test(id.value);
    var pass_result = pass_check.test(password.value);
    var login_CNT = parseInt(getLoginCookie("login_count"))
	
    if (login_CNT > 2) {
        alert("시도횟수가 너무 많습니다. 잠시후 시도해 주세요.");
        location.href = '../index.html';
    } else {
        if (check.checked == true) {
            // 아이디 체크 o
            // alert("쿠키를 저장합니다.");
            setCookie("id", id.value, 1);
            // 1일 저장
            // alert("쿠키 값 :" + id.value);
        } else { // 아이디 체크 x
            setCookie("id", id.value, 0); // 날짜를 0 - 쿠키 삭제
        }
        if (id.value.length === 0 || password.value.length === 0) {
            alert("이메일와 비밀번호를 모두 입력해주세요.");
        } else if (id_result == false) {
            alert("유효하지 않은 이메일입니다.");
        } else if (pass_result == false) {
            alert("숫자, 특수문자가 각각 1개 이상 포함된 8자리 이상의 비밀번호를 입력해주세요.");
        } else {
            session_set(); // 세션 생성
            form.submit();
            deleteCookie("login_count");
        }
    }
}

function logout(){
	location.href='../index.html';
	session_del(); // 세션 삭제
	console.log("로그아웃");
}

function autologout(){
	console.log("자동 로그아웃 카운트 시작");
	setTimeout(logout,30000);
}

function get_id() { /*
        var getParameters = function(paramName){ // 변수 = 함수(이름)
        var returnValue; // 리턴값을 위한 변수 선언
        var url = location.href; // 현재 접속 중인 주소 정보 저장
        var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('%'); // ?기준 slice 한 후 split 으로 나눔
            for(var i = 0; i < parameters.length; i++) {
    var varName = parameters[i].split('=')[0];
                if (varName.toUpperCase() == paramName.toUpperCase()) {
                    returnValue = parameters[i].split('=')[1];
                    return decodeURIComponent(returnValue);
                // 나누어진 값의 비교를 통해 paramName 으로 요청된 데이터의 값만 return
    }
    } // 2중 for문 끝
    } // 함수 끝
    if ( getParameters('id') != undefined){
    alert(getParameters('id') + '님 반갑습니다!'); // 메시지 창 출력
    } */
    if (true) {
        decrypt_text();
    } else {
        var getParameters = function (paramName) {
            var returnValue; // 리턴값을 위한 변수 선언
            var url = location.href; // 현재 접속 중인 주소 정보 저장
            var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('%'); // ?기준 slice 한 후 split 으로 나눔
            for (var i = 0; i < parameters.length; i++) {
                var varName = parameters[i].split('=')[0];
                if (varName.toUpperCase() == paramName.toUpperCase()) {
                    returnValue = parameters[i].split('=')[1];
                    return decodeURIComponent(returnValue);
                    // 나누어진 값의 비교를 통해 paramName 으로 요청된 데이터의 값만 return
                }
            } // 2중 for문 끝
        } // 함수 끝
        if (getParameters('id') != undefined) {
            alert(getParameters('id') + '님 반갑습니다!'); // 메시지 창 출력
        }
    }
}

function login_count() {
    var cookieValue = parseInt(getLoginCookie("login_count"));
    // 값이 NaN인 경우 초기화
    if (isNaN(cookieValue)) {
        deleteCookie("login_count")
        setCookie("login_count", 1, 1);
    } else {
        deleteCookie("login_count")
        setCookie("login_count", cookieValue + 1, 1);
    }
}

function logout_count() {
    deleteCookie("login_count")
    var cookieValue2 = parseInt(getLoginCookie("logout_count"));
    // 값이 NaN인 경우 초기화
    if (isNaN(cookieValue2)) {
        deleteCookie("logout_count")
        setCookie("logout_count", 1, 1);
    } else {
        deleteCookie("logout_count")
        setCookie("logout_count", cookieValue2 + 1, 1);
    }
}

