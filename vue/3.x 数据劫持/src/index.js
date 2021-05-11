import {reactive} from './vue3/reactivity'

const state = reactive({
    name:"sam",
    age:34,
    info:{
        job:"teacher",
        students:[
            {id:1,name:'xiaozhang'},
            {id:2,name:'xiaozhang4'},
        ],
        hobby:['ppp','zzzz','ssss']
    }
})


// state.name = '张三'
// state.age = 26
// state.info.job = 'lawer'
state.info.students.push({id:3,name:'realman'})
console.log(state);
