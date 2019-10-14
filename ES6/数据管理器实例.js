//数据访问对象

/**
	本地储存类
	参数 preId 本地储存数据前缀
	参数 timeSign 时间戳与储存数据之间的拼接符

	创建一个访问对象类，方便对本地数据操作，这样以后每个人在自己的模块就可以new这个类的实例来使用
*/
var BaseLocalStorage = function(preId, timeSign) {

    this.preId = preId;

    this.timeSign = timeSign || '|-|';

}

//在原型上定义，状态 && 对数据库增删改查的操作接口方法

BaseLocalStorage.prototype = {

    //状态
    status: {
        SUCCESS: 0, //成功
        FALLURE: 1, // 失败
        OVERFLOW: 2, // 溢出
        TIMEOUT: 3 // 超时过期
    }

    //保存本地储存
    storage: localStorage || window.localStorage;

    //获取本地储存数据库数据真实字段
    getKey:function(key){
    	return this.preId + key
    }

    //增删改查

    /**
    	key: 数据字段标识
    	value: 数据值
    	callback: 回调函数
    	time: 添加时间
    */
    set:function(key,value,callback,time){

    	var status = this.status.SUCCESS;

    	var key = this.getKey(key)

    	try{

    		time = new Date(time).getTime() || time.getTime()

    	} catch(e){

    		time = new Date().getTime() + 1000 * 60 * 60 * 24 * 31

    	}


    	try{

    		this.storage.setItem(key, time + this.timeSign + value)

    	} catch(e){

    		status = this.status.OVERFLOW

    	}

    	callback && callback.call(this,status,key,value)
    },

    get:function(key,callback){

    	var status = this.status.SUCCESS,

    		key = this.getKey(key);

    		value = null,

    		timeSignLen = this.timeSign.length,

    		that = this,

    		index,

    		time,

    		result;

    		try{
    			value = that.storage.getItem(key);
    		}catch(e){

    			result = {
    				status:that.status.FALLURE,
    				value:null;
    			}

    			callback && callback.call(this,result.status,result.value)
    		}

    },

    remove:function(key,callback){

    }
}
