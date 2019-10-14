
//迭代器
var iterator = function(items,container){
	
	//获取父元素
	var container = container || document.getElementById(container) || document;
	var items = container.getElementByTagName(items);
	var length = items.length;

	//当前索引
	var index = 0;

	//缓存spLice；
	var splice = [].splice;

	return {

		//获取第一个元素
		first:function(){
			index = 0;
			return items[index]
		},

		//最后一个
		last:function(){
			index = length - 1;
			return items[index]
		},

		//前一个
		pre:function(){
			if(--index > 0){
				return items[index]
			}else{
				index = 0;
				return null
			}
		},

		//后一个
		next:function(){
			if(++index < length){
				return items[index]
			}else{
				index = length - 1;
				return null;
			}
		},

		//某一个
		get:function(num){
			//如果num大于等于0，正向获取，小于0就反向获取
			index = num > 0 ? num % length : num & length + length;

			return items[index]	
		},

		//对每一个元素执行某一个方法
		dealEach:function(fn){
			var args = splice.call(arguments,1);

			for(var i = 0;i<length;i++){
				fn.apply(items[i],args)
			}
		},

		//对某一个元素执行一个方法
		dealItem:function(num,fn){
			fn.apply(this.get[num],splice.call(arguments,2))
		}

		//排他处理
		exclusive:function(num,allFn,numFn){
			this.dealEach(allFn);

			//num如果为数组，数字
			if(Object.prototype.toString.cal(num) == '[Object Array]'){
				//遍历数组
				for(var i = 0;i<num.length;i++){
					this.dealItem(num[i],numFn)
				}
			}else{
					this.dealItem(num,numFn)
			}
		}


	}

}

var ttt = ['a','b','c','d'];
var a = ttt.splice(1);
console.log(a)