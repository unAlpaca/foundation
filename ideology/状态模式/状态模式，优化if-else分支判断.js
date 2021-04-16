//创建超级玛丽状态类
var MarryState = function() {

    //保存当前所需的执行动作
    var _currentState = {};

    //定义动作的类型
    var states = {
        jump: function() {
            console.log('跳跃')
        },

        move: function() {
            console.log('移动')
        },

        shoot: function() {
            console.log('射击')
        },

        squat: function() {
            console.log('蹲下')
        }
    }

    //动作控制类
    var Action = {
        //改变状态方法
        changeState: function() {

            //组合动作通过传递多个参数实现
            var arg = arguments;

            //重置内部状态
            _currentState = {}

            if (arg.length) {
                for (var i = 0; i < arg.length; i++) {
                    _currentState[arg[i]] = true
                }
            }

            return this
        },

        //执行动作
        goes: function() {

            //触发一次动作
            console.log('触发一次动作')

            //遍历内部保存的动作
            for (var i in _currentState) {
                states[i] && states[i]()
            }

            return this
        }
    }

    return {
        change: Action.changeState,
        goes: Action.goes
    }
}

/**相当于是
1.定义了一个状态机，数据库，state，
2.定义操作状态的方法，actions
3.对外返回操作状态的方法，state因为闭包而永久保留。*/

var marry = new MarryState();

marry
	.change('jump','shoot')
	.goes()
	.goes()
	.change('shoot')
	.goes()


function onBridgeReady(){
   WeixinJSBridge.invoke(
      'getBrandWCPayRequest', {
         "appId":"wx2421b1c4370ec43b",     //公众号名称，由商户传入
         "timeStamp":"1395712654",         //时间戳，自1970年以来的秒数
         "nonceStr":"e61463f8efa94090b1f366cccfbbb444", //随机串
         "package":"prepay_id=u802345jgfjsdfgsdg888",
         "signType":"MD5",         //微信签名方式：
         "paySign":"70EA570631E4BB79628FBCA90534C63FF7FADD89" //微信签名
      },
      function(res){
      if(res.err_msg == "get_brand_wcpay_request:ok" ){
      // 使用以上方式判断前端返回,微信团队郑重提示：
            //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
      }
   });
}
if (typeof WeixinJSBridge == "undefined"){
   if( document.addEventListener ){
       document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
   }else if (document.attachEvent){
       document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
       document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
   }
}else{
   onBridgeReady();
}