// myfunctions

/* 表題を必須入力にする */
$(function(){
	$('.send').click(function(){
		let check_count = $('.class_subject :checked').length;
		if (check_count == 0 ){
			alert('エラー:1つ以上の表題を選択してください。');
			return false;
		}
	});
});

/* 送信内容を確認する */
function onButtonClick() {
	const subjects = [];
	const target = document.getElementById("id_inquiry");
	for (let i=0; i < target.subject.length; i++) {
		if (target.subject[i].checked) {
			subjects.push(target.subject[i].value);
		}
	}
	document.getElementById("span_subject").textContent = subjects;
	document.getElementById("span_name").textContent  = target.name.value;
	document.getElementById("span_kana").textContent  = target.kana.value;
	document.getElementById("span_email").textContent  = target.email.value;
	document.getElementById("span_mobile_tel").textContent  = target.mobile_tel.value;
	for (let i=0; i < target.gender.length; i++) {
		if (target.gender[i].checked) {
			document.getElementById("span_gender").textContent = target.gender[i].value;
		}
	}
	document.getElementById("span_send_date").textContent  = target.send_date.value;
	document.getElementById("span_relationship").textContent  = target.relationship.value;
	document.getElementById("span_message").textContent  = target.message.value;
}

/* プルダウンリストを未選択にする */
function setNonSelect(idname){
	var obj = document.getElementById(idname);
	obj.selectedIndex = -1;
}

/* 送信するかを確認する */
function submitWarning(){
	if(window.confirm('送信しますか？')){
		window.alert('送信しました');
		return true;
	} else {
		window.alert('送信をキャンセルしました');
		return false;
	}
}

/* リセットするかを確認する */
function resetWarning(){
	if(window.confirm('リセットしますか？')){
		window.alert('リセットしました');
		return true;
	} else {
		return false;
	}
}
