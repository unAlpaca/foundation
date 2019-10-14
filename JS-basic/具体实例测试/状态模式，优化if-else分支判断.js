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