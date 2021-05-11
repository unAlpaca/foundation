function isObject(value){
    return typeof value === 'object' && value !== null
}
function hasOwnProperty(target,key){
    return Object.prototype.hasOwnProperty.call(target,key)
}

function isEqual(oldValue,newValue){
    return oldValue === newValue
}
export {
    isObject,
    hasOwnProperty,
    isEqual
}