
var removesvg = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="774.266px" height="774.266px" viewBox="0 0 774.266 774.266" style="enable-background:new 0 0 774.266 774.266;"xml:space="preserve"><g><path class="fill" d="M640.35,91.169H536.971V23.991C536.971,10.469,526.064,0,512.543,0c-1.312,0-2.187,0.438-2.614,0.875C509.491,0.438,508.616,0,508.179,0H265.212h-1.74h-1.75c-13.521,0-23.99,10.469-23.99,23.991v67.179H133.916c-29.667,0-52.783,23.116-52.783,52.783v38.387v47.981h45.803v491.6c0,29.668,22.679,52.346,52.346,52.346h415.703c29.667,0,52.782-22.678,52.782-52.346v-491.6h45.366v-47.981v-38.387C693.133,114.286,670.008,91.169,640.35,91.169zM285.713,47.981h202.84v43.188h-202.84V47.981z M599.349,721.922c0,3.061-1.312,4.363-4.364,4.363H179.282c-3.052,0-4.364-1.303-4.364-4.363V230.32h424.431V721.922z M644.715,182.339H129.551v-38.387c0-3.053,1.312-4.802,4.364-4.802H640.35c3.053,0,4.365,1.749,4.365,4.802V182.339z"/><rect class="fill" x="475.031" y="286.593" width="48.418" height="396.942"/><rect class="fill" x="363.361" y="286.593" width="48.418" height="396.942"/><rect class="fill" x="251.69" y="286.593" width="48.418" height="396.942"/></g></svg>';
var completesvg = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 288.579 288.579" style="enable-background:new 0 0 288.579 288.579;" xml:space="preserve"><g><path class="fill"  d="M283.127,57.184l-22.871-22.131c-7.101-6.874-18.438-6.683-25.311,0.424L113.442,161.085c-6.88,7.107-19.404,8.879-27.985,3.962l-42.824-24.542c-8.568-4.917-19.512-1.951-24.428,6.629l-15.83,27.615c-4.917,8.58-1.951,19.518,6.623,24.434c0,0,103.889,59.46,103.931,59.376c0.048-0.084,137.25-141.57,170.617-176.058C290.419,75.389,290.228,64.052,283.127,57.184z"/></g></svg>';

document.getElementById('add').addEventListener('click',function(){
	var value = document.getElementById('item').value;
	if(value){
		additemtodo(value);
		document.getElementById('item').value = '';
	}
});

function removeitem(){
	var item = this.parentNode.parentNode;
	var parent = item.parentNode;

	parent.removeChild(item);
}

function completeitem(){
	var item = this.parentNode.parentNode;
	var parent = item.parentNode;
	var id = parent.id;


	var target = (id=== 'todo') ? document.getElementById('completed'):document.getElementById('todo');

	parent.removeChild(item);
	target.insertBefore(item,target.childNodes[0]);
}


function additemtodo(text) {

	var list = document.getElementById('todo');

	var item = document.createElement('li');
	item.innerText = text;

	var buttons = document.createElement('div');
	buttons.classList.add('buttons');

	var remove = document.createElement('button');
	remove.classList.add('remove');
	remove.innerHTML = removesvg;

	remove.addEventListener('click',removeitem);


	var complete = document.createElement('button');
	complete.classList.add('complete');
	complete.innerHTML = completesvg;

	complete.addEventListener('click',completeitem);

	buttons.appendChild(remove);
	buttons.appendChild(complete);
	item.appendChild(buttons);

	list.insertBefore(item, list.childNodes[0]);
}