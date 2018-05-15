window.addEventListener('DOMContentLoaded', function() {
	var options = {// オプションを追加してくだしあ
		active: 'active',
		fixed: 'fixed'
	}
	var elems = {// ターゲットにしたい要素を追加してくだしあ
		a: document.getElementsByTagName('a'),
		div: document.getElementsByTagName('div'),
		img: document.getElementsByTagName('img')
	}
	var events = {// イベントを追加してくだしあ
		click: 'click',
		load: 'load',
		ready: 'DOMContentLoaded'
	}
	var funcs = {// 処理を追加してくだしあ
		cons: function(elem) {
			console.log(elem);
		},
		addclass: function(elem, classname) {
			var classname = typeof classname !== 'undefined' ? classname : options.active;
			elem.classList.add(classname);
		},
		removeclass: function(elem, classname) {
			var classname = typeof classname !== 'undefined' ? classname : options.active;
			if(elem.className.indexOf(classname) !== -1) {
				elem.classList.remove(classname);
				console.log('remove');
			}
		}
	}
	var agg = function(elem, event, myFunc) {// ここは触らないで！
		var arr = elem.length;
		for (var i = 0; i < arr; i++) {
			elem[i].addEventListener(event, function() {
				myFunc(this);
			});
		}
	}
	/*ここから処理を設定*/
	// agg(elems.img, events.click, funcs.cons);
	// agg(elems.img, events.click, funcs.addclass);
});
