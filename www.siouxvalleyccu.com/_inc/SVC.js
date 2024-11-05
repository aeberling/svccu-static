// JavaScript Document
function leaving(init){
			
			function getByClass(classSearch, elems){
				if(elems){	
				}else{
					var elems = document.getElementsByTagName("*");	
				}
				var elemsByClass = [];
				var length = elems.length;
				for(var i = 0; i < length; i++){
					if(elems[i].className.indexOf(classSearch)!== -1){
						elemsByClass.push(elems[i]);
					}
				}
				return elemsByClass;
			}
			
			
			function thirdParty(goTo, title, id) {
				if (id) {
					id = id;
				}else{
					id = "extDis";
				}
				var popUp = document.getElementById(id);
				if(document.querySelectorAll){
					var closeBtn = popUp.querySelectorAll(".closeBtn")[0];
					var continueBtn = popUp.querySelectorAll(".continueBtn")[0];
					var popupBackground = popUp.querySelectorAll(".extDisBg")[0];	
				}else{
					var elems = popUp.getElementsByTagName("*");
					var closeBtn = getByClass("closeBtn", elems)[0];
					var continueBtn = getByClass("continueBtn", elems)[0];
					var popupBackground = getByClass("extDisBg", elems)[0];
				}
			
		
				continueBtn.href = goTo;
				closeBtn.onclick = function(){
					popUp.style.display = "none";
					}
				continueBtn.onclick = function(){
					popUp.style.display = "none";
					}
				popupBackground.onclick = function(){
					popUp.style.display = "none";
					}

				popUp.style.display = "block";
			}
			
			
				if(document.querySelectorAll){
					var links = document.querySelectorAll('.leaving');
				}else{
					var allLinks = document.getElementsByTagName("A");
					var links = getByClass("leaving", links);
				}
				var length = links.length; 
					for(var i = 0; length> i; i++){
						links[i].onclick = function(){
							thirdParty(this.href);
							return false;
						}
					}
		}
		
		leaving();
		

	
	function backtotop(init){
					//DEFAULTS//	
					var speed = 10;
					var elemID = "btt";
			
					if(init){
						if(init.speed) speed = init.speed;
						if(init.id) elemID = init.id;
					}
					
					var elem = document.getElementById(elemID);
					
					elem.onclick = function(){
								var timer = setInterval(function(){
									if(window.scrollY != 0){
										window.scrollTo(0 , window.scrollY - 100)
									}else{
										clearInterval(timer)	
									}
								}, speed);
						}
						
					window.onscroll = function(){
						if(window.scrollY > 0){
							elem.style.display = "block";
								if(elem.style.display === "none"){
									elem.style.display = "block";
								}
							}else{
								if(elem.style.display === "block"){
									elem.style.display = "none";
								}
							}
						}
				}
		backtotop();
		
		function loginPop(){
			var loginBtn = document.getElementById("loginBtn");
			var loginWindow = document.getElementById("olb");
			var loginCancel = document.getElementById("loginCancel");		
			
			
			function addToggle(classT, obj){
				if(obj.className.indexOf(classT) > 0){
					obj.className = obj.className.replace(" "+classT, "");
				}else{
					obj.className = obj.className+" "+classT;
				}
			}	
			
			
			
			loginBtn.onclick = function(){
				addToggle("open", loginWindow);	
			}
			loginCancel.onclick = function(){
				addToggle("open", loginWindow);	
			}
		}
		loginPop();
