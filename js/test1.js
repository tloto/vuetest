var count = 0;
var app = new Vue({
	el: '#app',
	data: {
		message: 'hello Vue' + count
	}
});

function clickevent() {
	app.message = "你知道么，哈哈哈：" + count;
	count += 1;
	app1.seen = count%2==0;
}



 var app1= new Vue({
 	el:"#app-1",
 	data:{
 		seen:true
 	}
 });