// JavaScript Document
// 初期の所持金
var money = 100;
var stopNumber = 0;
// seを読み込む(連想配列)
let sound_list = {
    "se_start": new Audio("audio/pencil-roll1.mp3"),
    "se_hit": new Audio("audio/correct1.mp3")
};

function roulette_start() {
	// seを読み込む(連想配列)
	let sound_list = {
    	"se_start": new Audio("audio/pencil-roll1.mp3"),
    	"se_hit": new Audio("audio/correct1.mp3")
	};
	// 賭けた金額が適切かチェック
	var chip = document.getElementById('chip');
	if (chip.value.match(/^[1-9][0-9]*$/) === null
	   || chip.value > money) {
		alert("適切な金額を入力してください")
		return;
	} else {
		// 賭けた金額が適切な場合、賭けた金額分所持金を減らす
		money -= chip.value;
		$(".money span").text(money);
	}
	var speed = 10;   //ルーレットの回転速度
	var divide = 37;   //ルーレットの分割数
	var timeout = 2000;   //○秒後に停止
	
	// ルーレットの数字を格納した配列
	var number = [0,
				  26,3,35,12,28,7,29,18,22,9,31,14,
				  20,1,33,16,24,5,10,23,8,30,11,36,
				  13,27,6,34,17,25,2,21,4,19,15,32];
	
	// ルーレットの数字に対応した角度を格納した配列
	var anglelist = [5,
				  15,25,34,44,54,63,73,83,92,102,112,121,
				  131,141,150,160,170,179,189,199,208,218,228,237,
				  247,257,266,276,286,295,305,315,324,334,344,355];
	
	//停止位置の設定。0～36までの乱数を取得して挿入する
	// const STOPANGLE = Math.random () * 360 + 0.5;
	const STOPNUMBER = Math.round(Math.random () * 36);
	
	//ルーレットの角度の変数。停止位置の値を初期値に設定する
	var angle = anglelist[STOPNUMBER];
	
	//ルーレットの分割数から1エリア分の角度を求める。
	// const SECTION = 360 / divide;
	
	//停止位置がどのエリアにあるか調べ、該当する番号をstopNumberに格納
	/*for(i=1; i<=divide; i++){
		if(SECTION*(i-1)+1 <= STOPANGLE && STOPANGLE <= SECTION*i) {
			stopNumber = i - 1;
		}
	};*/
	// 数字選択時se再生
	sound_list["se_start"].play();
	// 次呼ばれた時用に新たに生成
	sound_list["se_start"] = new Audio( sound_list["se_start"].src );
	
	// ルーレット画像を回転
	var rotation = setInterval(function(){
		$("#roulette").rotate(angle);
		angle += speed;
	}, 5);

	//timeout秒後に停止させる処理
	setTimeout(function(){
		//回転処理をしているsetIntervalをclear
		clearInterval(rotation);
		
		//setIntervalで増えた余分な数値を減らし、逆回転を防ぐためにマイナス値にする
		angle = angle % 360 - 360;
		
	　//停止位置までのアニメーション。完了するとresult()が実行される
      $("#roulette").rotate({
         angle: angle, 
         animateTo: anglelist[STOPNUMBER],
         callback: result
      });
		
	}, timeout);
	
	//ルーレット停止後に実行される処理
    var result = function(){
		$("#result span").text(number[STOPNUMBER])
		// alert内容を分岐させるための変数
		var al = 0;
		// 選択した数を格納する配列に当たりの番号があるかチェック
		if (sele.some(item => item === number[STOPNUMBER])) {
			win = Math.floor(rate * chip.value);
			al = 0;
			// 当たりの場合、賭けた金額 × レート分所持金を増やす
			money += win;
			$(".money span").text(money);
		} else {
			// 所持金がゼロになった場合、ゲームオーバーになる
			if (money === 0) {
				al = 1;
			} else {
				al = 2;
			}
		}
		// 結果に応じてalert
		switch(al) {
			case 0:
				// 数字選択時se再生
				sound_list["se_hit"].play();
				// 次呼ばれた時用に新たに生成
				sound_list["se_hit"] = new Audio( sound_list["se_hit"].src );
				alert("当たり！\n" + win + "$獲得！！");
				break;
			case 1:
				alert("GAME OVER");
				// ゲームオーバーのページに遷移
				location.href = 'gameover.html';
				break;
			case 2:
				alert("はずれ・・・・・・");
				break;
			default:
				alert("エラー");
				break;
		}
		
    };

}

// リセット用関数
function roulette_reset() {
	// ルーレット画像を変数に定義
	var image = document.getElementById("roulette");
	$("#roulette").rotate(0);

}


