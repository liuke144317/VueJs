window.onload = function() {
	Vue.component('button-lk', {
		data: function() {
			return {
				count: 0
			}
		},
		template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
	})
	/*通过 Prop 向子组件传递数据*/
	Vue.component('blog-post',{
		props:['title'],
		template:'<div class="blog-post">'
				+'<h1>{{title}}</h1>'
				+'<div v-html=""></div>'
				+'</div>'
	})
	/*单个根元素*/
	Vue.component('blog-post1',{
		props:['title','content'],
		template:'<div class="blog-post">'
				+'<h1>{{title}}</h1>'
				+'<div v-html="content"></div>'
				+'<button v-on:click="$emit(\'enlarge-text\')"> Enlarge text</button>'
				+'</div>'
	})
	/*当组件结构变的更加复杂的时候，重构组件*/
	Vue.component('blog-post2',{
		props:['post'],
		template:'<div class="blog-post">'
				+'<h1>{{post.title}}</h1>'
				+'<div v-html="post.content"></div>'
				+'<button> Enlarge text</button>'
				+'</div>'
				
	})
	//局部注册组件
	var customInput = {
		props:['value'],/*父组件向子组件传递参数*/
		template:'<input v-bind:value="value" v-on:input=\'$emit("input",$event.target.value)\'></input>'/*子组件绑定父组件中的input方法*/
	}
	/*Vue.component('custom-input',{
		props:['value'],//父组件向子组件传递参数
		template:'<input v-bind:value="value" v-on:input=\'$emit("input",$event.target.value)\'></input>'//子组件绑定父组件中的input方法
	})*/
	Vue.component('alert-box',{
		template:'<div class="newStyle">'
		+'<strong>Error!</strong>'
		+'<slot></slot>'
		+'</div>'
	})
	Vue.component('select-type1',{
		template:'<div>type1模板</div>'
	})
	Vue.component('select-type2',{
		template:'<div>type2模板</div>'
	})
	Vue.component('select-type3',{
		template:'<div>type3模板</div>'
	})
	var demo1 = new Vue({
		el:'#demo1',
		data:{
			arr:[
				{title:"阴天"},
				{title:"在不开灯的房间"}
			],
			fontSize:26
		}
	})
	var demo2 = new Vue({
		el:'#demo2',
		data:{
			fontSize:26
		}
	})
	var demo3 = new Vue({
		el:'#demo3',
		data:{
			testWord:'26',
			newWord:'27',
			modelWord:'28'
		},
		//局部注册
		components:{
			'custom-input':customInput
		}
	})
	var demo4 = new Vue({
		el:'#demo4',
		data:{
			currentTab:'',
			value:'',
			selectData:[
			{id:'first',value:'type1',text:'组件1'},
			{id:'second',value:'type2',text:'组件2'},
			{id:'third',value:'type3',text:'组件3'},
			]
		},
		computed:{
			useComponent:function(){
				return 'select-'+this.currentTab;
			}
		}
	})
}