window.onload = function(){
	var demo1 = new Vue({
		el: '#demo1',
		data: {
			count: 0
		}
	});

	var demo2 = new Vue({
		el: '#demo2',
		data: {
			count: 0
		},
		methods: {
			greet: function(event) {
				this.count += 1;
				console.log('event',event)
			},
			hello: function() {
				alert('你好！')
			}
		}
	});
	var demo3 = new Vue({
		el:'#demo3',
		data:{
			count:0
		},
		methods:{
			greet:function(event){
				console.log(event.id);
			},
			doThis:function(){
				console.log('此按钮触发方法只能是一次');
			}
		}
	})
	
	var demo4 = new Vue({
		el:'#demo4',
		methods:{
			doThis:function(){
				console.log('此按钮触发方法只能是一次');
			}
		}
	})
	var demo5 = new Vue({
		el:'#demo5',
		methods:{
			doThis:function(){
				/*console.log('此按钮触发方法只能是一次');*/
				alert('此按钮触发方法只能是一次');
			},
			first:function(){
				/*console.log('div上面的方法');*/
				alert('div上面的方法');
			}
		}
	})
	
	var demo6 = new Vue({
		el:'#demo6',
		methods:{
			doThis:function(){
				console.log('v-on:click.self上触发方法');
				
			},
			doThat:function(){
				console.log('button上面触发方法');
			}
		}
	})
	var demo7 = new Vue({
		el:'#demo7',
		methods:{
			submit:function(){
				console.log('v-on:click.self上触发方法');
				
			},
		}
	})
}
