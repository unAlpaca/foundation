// var Observer = (function(){
//
// 	// 储存消息的容器,相当于存储了所有的订阅者以及其回调函数
// 	var _messages = {};
//
// 	/**返回包含3个方法的对象：
// 		1.注册信息
// 		2.发布信息
// 		3.移除信息
// 	*/
//
// 	return {
// 		data:_messages,
// 		regist:function(type,fn){
//
// 			// 如果此消息不存在则应该创建一个该消息类型（其实是创建了一个数列，推入了一个实例），其实就是一个订阅者,
// 			if(typeof _messages[type] === 'undefined'){
// 				_messages[type] = [fn];
// 			}else{
// 				// 如果存在就推入该订阅者
// 				_messages[type].push(fn)
// 			}
// 		},
// 		distribute:function(type,args){
// 			if(!_messages[type]) return
//
// 			//存在的话就要遍历这个_messges[type]
// 			//这个events参数的设定，限定了regist,fn里面的参数只能是对象{}
// 			var events = {
// 				type:type,
// 				args:args || {}
// 			}
//
// 			for(var i = 0,len = _messages[type].length;i<len;i++){
//
// 				//依次执行
// 				_messages[type][i].call(this,events)
// 			}
// 		},
// 		remove:function(type,fn){
//
// 			//这里指定了要移除的Fn
//
// 			//如果存在
// 			if(_messages[type] instanceof Array){
//
// 				// 从最后开始遍历
// 				var i = _messages[type].length - 1;
//
// 				for( ; i >= 0; i--){
//
//
// 					// _messages[type][i] === fn && _messages[type].splice(i,1);
// 					// console.log( _messages[type][i]);
// 					// console.log(fn)
// 					// console.log( JSON.stringify(_messages[type][i]) == JSON.stringify(fn))
// 					if(JSON.stringify(_messages[type][i]) == JSON.stringify(fn)){
// 						_messages[type].splice(i,1);
// 						console.log(_messages[type])
// 					}
// 				}
// 			}
// 		}
// 	}
// })()
let Observer = (function (){
	let _state = {}
	return {
		state:_state,
		regist:function (type,fn){
			if(_state.hasOwnProperty(type)){
				_state[type].push(fn)
			}else {
				_state[type] = [fn]
			}
		},
		distribute:function (type,params){
			if(!_state.hasOwnProperty(type)) return undefined;
			_state[type].forEach(function (fn){
				console.log(fn);
				console.log(params);
				fn.call(this,params)
			})
		}
	}
})()

Observer.regist('test',function(e){
	console.log(e);
	// console.log(e.target,e.args,1)
})
Observer.regist('test2',function(e){
	// console.log(e.target,e.args,2)
	// console.log(1)
})
Observer.regist('test2',function(e){
	// console.log(e.target,e.args,3)
})



Observer.distribute('test',{msg:'传递参数'})
// Observer.distribute('test2',{msg:'传递参数'})
// Observer.distribute('test2',{msg:'传递参数2'})



// Observer.remove('test2',function(e){
// 	console.log(e.target,e.args.msg,3)
// })