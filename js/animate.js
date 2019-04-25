new Vue({
	el:'#demo1',
	data:{
		show:false
	},
	methods:{
		beforeEnter(){
			console.log('beforeEnter');
		},
		enter(){
			console.log('enter');
		},
		afterEnter(){
			let _this =this; 
			console.log('afterEnter');
			setTimeout(function(){
				console.log('setTime');
				_this.show = false
			},1000)
		},
		enterCancelled(){
			console.log('enterCancelled');
		}
	}
})
