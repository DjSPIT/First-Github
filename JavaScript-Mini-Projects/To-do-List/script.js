//Creating a simple todo-list app


(function(){
	var input = document.getElementById("textinput");
	var btn = document.getElementById("btn");
	var lists = {
		newlists: document.getElementById("myList")
	};

//console.log(input,btn,lists);
	

	//Function to make a task with string as input
	var makeTasks = function(str){
		var el = document.createElement("li");
		var checkbox = document.createElement("input"); //creates a checkbox element
		var content = document.createElement("span");
		checkbox.type = "checkbox";
		//checkbox.addEventListener("click",StrikeOut);
		content.textContent = str;

		//Delete Button
		var delBtn = document.createElement("button");
		delBtn.appendChild(document.createTextNode("X"));
		delBtn.addEventListener("click",deleteItem);

		//Function to delete button
		function deleteItem(){
		el.classList.add("delete");
		};


		el.appendChild(checkbox);
		el.appendChild(content);
		el.appendChild(delBtn);
		return el;
	};

	


	// //function to add a to-do task to the web after pressing "ADD"
	 var addTask = function(task){
		lists.newlists.appendChild(task);
	 };

	 //console.log(addTask(makeTasks("Test")));

	//Assigning the typed input
	var assignInput = function(){
		var string  = input.value.trim();

		if(string.length > 0){
			addTask(makeTasks(string));

			input.value = "";
			input.focus();
		}
	};

	//Enter keycode.
	btn.addEventListener("click",assignInput);
	input.focus();
	input.addEventListener("keyup",function(evt){
		var key = evt.keyCode;
		if(key === 13){
		assignInput();
		}

	});



}());