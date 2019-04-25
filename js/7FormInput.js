window.onload = function(){
	var demo1 = new Vue({
		el:'#demo1',
		data:{
			message:'123'
		}
	})
	var demo2 = new Vue({
		el:'#demo2',
		data:{
			checked:''
		}
	})
	var demo3 = new Vue({
		el:'#demo3',
		data:{
			checked:[]
		}
	})
	
	var demo4 = new Vue({
		el:'#demo4',
		data:{
			selected:''
		}
	})
	var demo5 = new Vue({
		el:'#demo5',
		data:{
			selected:'a',
			options:[
			{text:'A',value:'a'},
			{text:'B',value:'b'},
			{text:'C',value:'c'}
			]
		}
	})
}
