var data = {message:"hello world!!!"};
Object.freeze(data);
var app = new Vue({
	el:'#app',
	data:data
})
//v-bind:title
var app2 =new Vue({
	el:'#app-2',
	data:{
		message:'页面加载于'+new Date().toLocaleString()
	}
})
var obj = {
	data:"123data"
}
var dom = document.getElementById("normal")
dom.innerHTML=obj.data;
//v-for
var app4 =new Vue({
	el:'#app-4',
	data:{
		todos:[
			{test:'好好学习'},
			{test:'天天向上'},
			{test:'好好学习'},
		]
	}
})
//v-on
var app5 =new Vue({
	el:'#app-5',
	data:{
		msg:'天 使 之 城',
	},
	methods:{
		reverse:function(){
			this.msg=this.msg.split('').reverse().join('');//双向绑定
		}
	},
	//计算属性
	computed:{
		reverseMSG:function(){
			return this.msg.split('').reverse().join('');
		}
	}
})
//v-model
var app6 =new Vue({
	el:'#app-6',
	data:{
		msg:'天 使 之 城',
	}
})
//定义名为 todo-item 的新组件
Vue.component('todo-item', {
	props:['todo'],
  	template: '<li>{{todo.content}}</li>'
})
var app7 = new Vue({
	el:'#app-7',
	data:{
		color:[
			{id:'1',content:'red'},
			{id:'2',content:'green'},
			{id:'3',content:'blue'},
			{id:'4',content:'black'},
		]
	},
	//钩子函数create
	created:function(){
		console.log('a is: ' + this.color[1].id);
	}
})
//计算属性
var app8 = new Vue({
	el:'#app-8',
	data:{
		firstName:"",
		lastName:""
	},
	computed:{
		fullName:function(){
			return this.firstName+" "+this.lastName;
		}
	}
})

 
   
