//定义模块event依赖于dom
F.module('event',['dom'],function(dom){
	var events = {
		on:function(id,type,fn){
			dom.g(id)['on'+type] = fn;
		}
	}
	return events;
});