import Vue from 'vue'

let vm = new Vue({
    el:'#app',
    data(){
        return {
            info:{
                a:{
                    b:{
                        c:1
                    }
                }
            },
            title:'学生列表',
            classNum: 1,
            total:2,
            teacher:[
                '张三','李四'
            ],
            stdents:[
                {id:1,name:'sam'},
                {id:2,name:'sam2'},
            ]
        }
    }
})

console.log(vm)
// console.log(vm._data.title)
// console.log(vm.title)
// console.log(vm.info.a.b.c);
// vm.teacher.push('wangwu')
// console.log(vm.teacher[2]);
console.log(vm.stdents.splice(1,1,{
    id:3,
    name:'whtie'
}))
console.log(vm.stdents)
