class Set{
    constructor(args){ 
        this.items = {}
    }
    has(value){
        return this.items.hasOwnProperty(value)
    }
    add(value){
        if(!this.has(value)){
            this.items[value] = value
            return true
        }
        return false
    }
    remove(value){
        if(this.has(value)){
            delete this.items[value]
            return true
        }
        return false
    }
    clear(){
        this.items = {}
    }
    size(){
        return Object.keys(this.items).length
    }
    values(){
        return Object.keys(this.items)
    }
    //并集
    union(otherset){
        let uniSet = new Set();

        let values = this.values();
        for(let i in values){
            uniSet.add(values[i])
        }

        let values2 = otherset.values();
        for(let j in values2){
            uniSet.add(values2[j])
        }
        return uniSet
    }

    //交集
    intersection(otherset){
        let intersectionSet = new Set();
        let values = this.values();
        for(let i in values){
            if(otherset.has(values[i])){
                intersectionSet.add(values[i])
            }
        }
        return intersectionSet
    }
}

let set = new Set();
set.add(1);
console.log(set.values()); //输出["1"]
console.log(set.has(1)); //输出true
console.log(set.size()); //输出1
set.add(2);
console.log(set.values()); //输出["1", "2"]
console.log(set.has(2)); //true
console.log(set.size()); //2
set.remove(1);
console.log(set.values()); //输出["2"]
set.remove(2);
console.log(set.values()); 
