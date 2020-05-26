function makeIterator(array){
    var nextIndex = 0;
    return {
        next:function(){
            return (
                nextIndex < array.length?
                {value:array[nextIndex++],done:false}:
                {value:null,done:true}
            )
        }
    }
}

let it = makeIterator(['a','b']);
