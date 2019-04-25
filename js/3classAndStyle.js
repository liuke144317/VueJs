var app1 = new Vue({
	el:'#app1',
	data:{
		isActive:true,
		hasError:true
	}
})
var app2 = new Vue({
	el:'#app2',
	data:{
		classObject:{
			active:true,
			'text-danger':true//有“-”之类的符号必须引号包起来才能识别
		}
	}
})
var app3 = new Vue({
	el:'#app3',
	data:{
		isActive:true,
		hasError:false
	},
	computed:{
		classObject:function(){
			return{
				active:this.isActive&&this.hasError,
				'text-danger':this.isActive&&this.hasError===false
			}
		}
	}
})

var app4 = new Vue({
	el:'#app4',
	data:{
		doc1:'active',
		doc2:'text-align'
	}
})

var app5 = new Vue({
	el:'#app5',
	data:{
		isActive:false,
		doc1:'active',
		doc2:'text-align'
	}
})

/*定义组件*/
Vue.component('my-component',{
	template:'<p class="bar foot">在组件上使用样式</p>'
})

var app6 = new Vue({
	el:'#app6',
	data:{
		activeColor:'red',
		activeFontSize:'20'
	}
})

var app7 = new Vue({
	el:'#app7',
	data:{
		styleObject:{
			color:'red',
			'font-size':'20px'
		}
	}
})

var app8 = new Vue({
	el:'#app8',
	data:{
		styleObject1:{
			color:'green'
		},
		styleObject2:{
			'font-size':'30px'
		}
	}
})

