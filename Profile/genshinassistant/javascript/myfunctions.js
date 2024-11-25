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
	const target = document.getElementById("id_inquiry");

	// 表題を取得
	const subjects = Array.from(target.querySelectorAll('input[name="subject[]"]:checked')).map(el => el.value);
	document.getElementById("span_subject").textContent = subjects.length > 0 ? subjects.join(", ") : "未選択";

	// 氏名、ふりがな、メール、電話
	document.getElementById("span_name").textContent = target.name.value || "未入力";
	document.getElementById("span_kana").textContent = target.kana.value || "未入力";
	document.getElementById("span_email").textContent = target.email.value || "未入力";
	document.getElementById("span_mobile_tel").textContent = target.mobile_tel.value || "未入力";

	// 性別の取得
	const gender = target.querySelector('input[name="gender"]:checked');
	document.getElementById("span_gender").textContent = gender ? gender.value : "未選択";

	// 送信日、学校との関わり、メッセージ
	document.getElementById("span_send_date").textContent = target.send_date.value || "未入力";
	document.getElementById("span_relationship").textContent = target.relationship.value || "未選択";
	document.getElementById("span_message").textContent = target.message.value || "未入力";
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
