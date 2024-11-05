function menu(init){

	var maxSize = init.maxSize;
	
	var menuBtn = document.getElementById("menuBtn");
	var menus = document.querySelectorAll('.drop');
	var tlmi = document.querySelectorAll('#nav .tlmi[aria-haspopup="true"]');
	var tlmia = document.querySelectorAll('#nav a.tlmi');
	var slmi = document.querySelectorAll('#nav .tlmi + div[role="menu"] li[role="menuitem"]');
	
	var curmen;//current menu
	var vps;//viewport size
	
	var keys = {
		esc:    27,
		left:   37,
		right:  39,
		up:     38,
		down:   40,
		enter:  13
	};
	function toggle(el){
			if (el.getAttribute('aria-expanded') == 'false' || el.getAttribute('aria-expanded') ==  null) {
				el.setAttribute('aria-expanded', "true");
			} else {
				el.setAttribute('aria-expanded', "false");
			}
	}
	function closeAll(){
		for(var i = 0; i < tlmi.length; i++){
			tlmi[i].setAttribute('aria-expanded', "false");
		}
	}
	function openMenu(el){
		closeAll();
		el.click();
		el.nextElementSibling.getElementsByTagName('a')[0].focus();
	}
	if(menuBtn){
		menuBtn.addEventListener("click",function(){
			toggle(menuBtn);
		});
	}
Array.prototype.forEach.call(tlmia, function(el, i){
	el.addEventListener("keydown", function(event) {
		vps = document.documentElement.clientWidth;
		if(init.type === "flyout" || vps < maxSize){
			
				switch (event.keyCode) {
					case keys.up:
						var prevEl = i-1;
						tlmia[prevEl].focus();
						break;
					case keys.down:
						var nextEl = i+1;
						tlmia[nextEl].focus();
						break;
				}
		}else{
			switch (event.keyCode) {
					case keys.left:
						var prevEl = i-1;
						tlmia[prevEl].focus();
						break;
					case keys.right:
						var nextEl = i+1;
						tlmia[nextEl].focus();
						break;
				}
				
		}
				return false;
		});
});
Array.prototype.forEach.call(tlmi, function(el, i){
		el.addEventListener("click",  function(event){
			vps = document.documentElement.clientWidth;
			if(vps > maxSize){
				closeAll();
			}
			curmen = i;
			toggle(this);
			event.preventDefault();	
			return false; 
			
		});
		el.addEventListener("mouseenter",  function(event){
			vps = document.documentElement.clientWidth;
			if(vps > maxSize){
				closeAll();
				this.click();
			}
		})
		el.addEventListener("keydown", function(event){
			vps = document.documentElement.clientWidth;
			if(init.type === "flyout" || vps < maxSize){
				switch (event.keyCode) {
					case keys.right:
						openMenu(this);
						break;
				}
			}else{
				switch (event.keyCode) {
					case keys.down:
						openMenu(this);
						break;
				}	
			}
				switch (event.keyCode) {
				case keys.enter:
						openMenu(this);
						event.preventDefault();
						break;
						
					case keys.esc:	
						closeAll();
						break;
				}
				return false;
		});
});
Array.prototype.forEach.call(menus, function(el, i){
		el.addEventListener("mouseleave",  function(event){
			vps = document.documentElement.clientWidth;
			if(vps > maxSize){
				closeAll();
			}
		});
});
Array.prototype.forEach.call(slmi, function(el, i){
		el.addEventListener("keydown", function(event) {
				switch (event.keyCode) {
					case keys.left: 
					case keys.up: 
						if(this.previousElementSibling === null){
							tlmi[curmen].focus();
							closeAll();
						}else{
							var prevEl = i-1;
							slmi[prevEl].firstChild.focus();
						}
						break;
					case keys.down: 
						var nextEl = i+1;
						slmi[nextEl].firstChild.focus();
					
						break;
					case keys.esc:
						closeAll();
						tlmi[curmen].focus();
						break;
				}
			return false;
	});
});
}


