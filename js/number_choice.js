// JavaScript Document
// 選択した数を格納する配列
let sele = [];
// seleから選択した数を削除したものを格納する配列
// let sele2 = [];
// 配列から指定した値を削除するための変数及び関数
var del = 0;
function era ( num ) {
	return num !== del;
}

// 配列から指定した複数の値を削除するための関数
function ary_delete ( num, del2 ) {
	num = num.filter(function(v){
		var check = true;
		for (var i in del2) {
			if (v == del2[i]) {
				check = false;
				break;
			}
		}
		return check;
	});
	return num;
}

// 配列に重複していない複数の値を加えるための関数
function ary_add ( num, adds ) {
	for (var i in adds) {
		if (num.indexOf(adds[i]) === -1) {
			num.push(adds[i]);
		}
	}
	return num;
}

// レート計算用関数
function setRate() {
	// choiceクラスの要素数からレートを計算し、これを表示
	var selectnum = $(".choice").length;
	if (selectnum !== 0) {
		// 小数点第3位を四捨五入
		rate = (36 / selectnum).toFixed(2);
		$(".rate span").text(rate)
	} else {
		$(".rate span").text("xx.xx")
	}
}

$(function() {
	// seを読み込む(連想配列)
	let sound_list = {
    	"se_choice": new Audio("audio/decision28.mp3"),
    	"se_cancel": new Audio("audio/cancel2.mp3")
	};
	
	$('.number').on('click', function() {
		if($(this).hasClass('choice')) {
			// choiceクラスを消し、配列からその値を消す
			$(this).removeClass('choice');
			// filter()を用い、data-keyを抽出して削除
			del = $(this).data('key');
			//sele2 = [];
			sele = sele.filter(era);
			//sele = [];
			//sele = sele2.slice;
			// 数字選択時se再生
			sound_list["se_cancel"].play();
			// 次呼ばれた時用に新たに生成
			sound_list["se_cancel"] = new Audio( sound_list["se_cancel"].src );
		} else {
			// choiceクラスを足し、配列にその値を加える
			$(this).addClass('choice');
			sele.push($(this).data('key'));
			// 数字選択時se再生
			sound_list["se_choice"].play();
			// 次呼ばれた時用に新たに生成
			sound_list["se_choice"] = new Audio( sound_list["se_choice"].src );
		}
		// choiceクラスの要素数からレートを計算し、これを表示
		setRate();
	});
	$('#red_choice').on('click', function() {
		// 関数を呼び出し、すべての「赤」を選択する
		redChoice();
	});
	$('#black_choice').on('click', function() {
		// 関数を呼び出し、すべての「赤」を選択する
		blackChoice();
	});
});

// Columnで賭ける方法
function column1() {
	// seを読み込む(連想配列)
	let sound_list = {
    	"se_choice": new Audio("audio/decision28.mp3"),
    	"se_cancel": new Audio("audio/cancel2.mp3")
	};
	// choiceクラスとnumber_column1クラスをあわせもつ要素数を取得
	var column1_num = $(".choice" + ".number_column1").length;
	if (column1_num === 12) {
		console.log("すべての選択を解除");
		// choiceクラスを消し、配列からその値を消す
		$('div').removeClass(function(index, className) {
			if (className === 'number number_red number_column1 choice') {
				return 'choice';
			} else if (className === 'number number_black number_column1 choice') {
				return 'choice';
			}
		});
		// filter()を用い、data-keyを抽出して削除
		var del2 = [3,6,9,12,15,18,21,24,27,30,33,36];
		sele = ary_delete(sele, del2);
		// 数字選択時se再生
		sound_list["se_cancel"].play();
		// 次呼ばれた時用に新たに生成
		sound_list["se_cancel"] = new Audio( sound_list["se_cancel"].src );
	} else {
		console.log("すべて選択");
		// choiceクラスを足し、配列にその値を加える
		$('div').addClass(function(index, className) {
			if (className === 'number number_red number_column1') {
				return 'choice';
			} else if (className === 'number number_black number_column1') {
				return 'choice';
			}
		});
		// 重複していない値を配列に加える
		var adds = [3,6,9,12,15,18,21,24,27,30,33,36];
		sele = ary_add(sele, adds);
		// 数字選択時se再生
		sound_list["se_choice"].play();
		// 次呼ばれた時用に新たに生成
		sound_list["se_choice"] = new Audio( sound_list["se_choice"].src );
	}
	// choiceクラスの要素数からレートを計算し、これを表示
	setRate();
}

function column2() {
	// seを読み込む(連想配列)
	let sound_list = {
    	"se_choice": new Audio("audio/decision28.mp3"),
    	"se_cancel": new Audio("audio/cancel2.mp3")
	};
	// choiceクラスとnumber_column2クラスをあわせもつ要素数を取得
	var column2_num = $(".choice" + ".number_column2").length;
	if (column2_num === 12) {
		console.log("すべての選択を解除");
		// choiceクラスを消し、配列からその値を消す
		$('div').removeClass(function(index, className) {
			if (className === 'number number_red number_column2 choice') {
				return 'choice';
			} else if (className === 'number number_black number_column2 choice') {
				return 'choice';
			}
		});
		// filter()を用い、data-keyを抽出して削除
		var del2 = [2,5,8,11,14,17,20,23,26,29,32,35];
		sele = ary_delete(sele, del2);
		// 数字選択時se再生
		sound_list["se_cancel"].play();
		// 次呼ばれた時用に新たに生成
		sound_list["se_cancel"] = new Audio( sound_list["se_cancel"].src );
	} else {
		console.log("すべて選択");
		// choiceクラスを足し、配列にその値を加える
		$('div').addClass(function(index, className) {
			if (className === 'number number_red number_column2') {
				return 'choice';
			} else if (className === 'number number_black number_column2') {
				return 'choice';
			}
		});
		// 重複していない値を配列に加える
		var adds = [2,5,8,11,14,17,20,23,26,29,32,35];
		sele = ary_add(sele, adds);
		// 数字選択時se再生
		sound_list["se_choice"].play();
		// 次呼ばれた時用に新たに生成
		sound_list["se_choice"] = new Audio( sound_list["se_choice"].src );
	}
	// choiceクラスの要素数からレートを計算し、これを表示
	setRate();
}

function column3() {
	// seを読み込む(連想配列)
	let sound_list = {
    	"se_choice": new Audio("audio/decision28.mp3"),
    	"se_cancel": new Audio("audio/cancel2.mp3")
	};
	// choiceクラスとnumber_column2クラスをあわせもつ要素数を取得
	var column3_num = $(".choice" + ".number_column3").length;
	if (column3_num === 12) {
		console.log("すべての選択を解除");
		// choiceクラスを消し、配列からその値を消す
		$('div').removeClass(function(index, className) {
			if (className === 'number number_red number_column3 choice') {
				return 'choice';
			} else if (className === 'number number_black number_column3 choice') {
				return 'choice';
			}
		});
		// filter()を用い、data-keyを抽出して削除
		var del2 = [1,4,7,10,13,16,19,22,25,28,31,34];
		sele = ary_delete(sele, del2);
		// 数字選択時se再生
		sound_list["se_cancel"].play();
		// 次呼ばれた時用に新たに生成
		sound_list["se_cancel"] = new Audio( sound_list["se_cancel"].src );
	} else {
		console.log("すべて選択");
		// choiceクラスを足し、配列にその値を加える
		$('div').addClass(function(index, className) {
			if (className === 'number number_red number_column3') {
				return 'choice';
			} else if (className === 'number number_black number_column3') {
				return 'choice';
			}
		});
		// 重複していない値を配列に加える
		var adds = [1,4,7,10,13,16,19,22,25,28,31,34];
		sele = ary_add(sele, adds);
		// 数字選択時se再生
		sound_list["se_choice"].play();
		// 次呼ばれた時用に新たに生成
		sound_list["se_choice"] = new Audio( sound_list["se_choice"].src );
	}
	// choiceクラスの要素数からレートを計算し、これを表示
	setRate();
}

function redChoice() {
	// seを読み込む(連想配列)
	let sound_list = {
    	"se_choice": new Audio("audio/decision28.mp3"),
    	"se_cancel": new Audio("audio/cancel2.mp3")
	};
	// choiceクラスとnumber_redクラスをあわせもつ要素数を取得
	var red_num = $(".choice" + ".number_red").length;
	if (red_num === 18) {
		console.log("すべての選択を解除");
		// choiceクラスを消し、配列からその値を消す
		$('div').removeClass(function(index, className) {
			if (className === 'number number_red number_column1 choice') {
				return 'choice';
			} else if (className === 'number number_red number_column2 choice') {
				return 'choice';
			} else if (className === 'number number_red number_column3 choice') {
				return 'choice';
			}
		});
		// filter()を用い、data-keyを抽出して削除
		var del2 = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
		sele = ary_delete(sele, del2);
		// 数字選択時se再生
		sound_list["se_cancel"].play();
		// 次呼ばれた時用に新たに生成
		sound_list["se_cancel"] = new Audio( sound_list["se_cancel"].src );
	} else {
		console.log("すべて選択");
		// choiceクラスを足し、配列にその値を加える
		$('div').addClass(function(index, className) {
			if (className === 'number number_red number_column1') {
				return 'choice';
			} else if (className === 'number number_red number_column2') {
				return 'choice';
			} else if (className === 'number number_red number_column3') {
				return 'choice';
			}
		});
		// 重複していない値を配列に加える
		var adds = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
		sele = ary_add(sele, adds);
		// 数字選択時se再生
		sound_list["se_choice"].play();
		// 次呼ばれた時用に新たに生成
		sound_list["se_choice"] = new Audio( sound_list["se_choice"].src );
	}
	// choiceクラスの要素数からレートを計算し、これを表示
	setRate();
}

function blackChoice() {
	// seを読み込む(連想配列)
	let sound_list = {
    	"se_choice": new Audio("audio/decision28.mp3"),
    	"se_cancel": new Audio("audio/cancel2.mp3")
	};
	// choiceクラスとnumber_blackクラスをあわせもつ要素数を取得
	var black_num = $(".choice" + ".number_black").length;
	if (black_num === 18) {
		console.log("すべての選択を解除");
		// choiceクラスを消し、配列からその値を消す
		$('div').removeClass(function(index, className) {
			if (className === 'number number_black number_column1 choice') {
				return 'choice';
			} else if (className === 'number number_black number_column2 choice') {
				return 'choice';
			} else if (className === 'number number_black number_column3 choice') {
				return 'choice';
			}
		});
		// filter()を用い、data-keyを抽出して削除
		var del2 = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35];
		sele = ary_delete(sele, del2);
		// 数字選択時se再生
		sound_list["se_cancel"].play();
		// 次呼ばれた時用に新たに生成
		sound_list["se_cancel"] = new Audio( sound_list["se_cancel"].src );
	} else {
		console.log("すべて選択");
		// choiceクラスを足し、配列にその値を加える
		$('div').addClass(function(index, className) {
			if (className === 'number number_black number_column1') {
				return 'choice';
			} else if (className === 'number number_black number_column2') {
				return 'choice';
			} else if (className === 'number number_black number_column3') {
				return 'choice';
			}
		});
		// 重複していない値を配列に加える
		var adds = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35];
		sele = ary_add(sele, adds);
		// 数字選択時se再生
		sound_list["se_choice"].play();
		// 次呼ばれた時用に新たに生成
		sound_list["se_choice"] = new Audio( sound_list["se_choice"].src );
	}
	// choiceクラスの要素数からレートを計算し、これを表示
	setRate();
}
