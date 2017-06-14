//定义模块dom
F.module('dom',function(){
	return{
		g:function(id){
			return document.getElementById(id);
		},
		html:function(id,html){
			if(html){
				this.g(id).innerHTML = html;
			}else{
				return this.g(id).innerHTML;
			}
		}
	}
});