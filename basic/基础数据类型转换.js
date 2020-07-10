parseInt("") // NaN
Number("") //0
isNaN("") //false
parseInt(null) // NaN
Number(null) // 0
isNaN(null) //false
parseInt("12px") //12
Number("12px") //NaN
isNaN("12px") //true
parseFloat("1.6px") + parseInt("1.2px") + typeof parseInt(null)
//1.6 + 1 + "number" => "2.6number"

isNaN(Number(!!Number(parseInt("0.8")))) //false

typeof !parseInt(null) + !isNaN(null) // boolean + true

10 + false + undefined + [] + "Tencent" + null + true + {}

//NaNTencentnulltrue[object Object]
