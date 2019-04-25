var demo1 =new Vue({
	el:'#demo1',
	data:{
		items:[
			{message:'first'},
			{message:'second'}
		]
	}
})

var demo2 = new Vue({
	el:'#demo2',
	data:{
		obj:{
			firstName:'小',
			lastName:'明',
			age:30
		}
	}
})

var demo3 = new Vue({
	el:'#demo3',
	data:{
		number:[1,2,3,4,5,6,7]
	},
	computed:function(){
		return this.number.filter()
	}
})
