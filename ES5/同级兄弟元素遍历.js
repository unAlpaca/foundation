// 获取兄弟元素名称
function getSiblingName(node){
	//如果存在兄弟元素,前一个
	if(node.previousSibling){
		var name = '';  //返回的兄弟元素名称字符串
		var count = 1;  //紧邻兄弟元素中相同元素名称个数
		var nodeName = node.nodeName; //原始节点
		var sibling = node.previousSibling;
		while(sibling){

			//1.如果节点为元素
			//2.节点类型与前一个兄弟元素类型相同
			//3.前一个兄弟元素存在

			//在以上基础上去判断 名称是否相同
			if(sibling.nodeType == 1 && sibling.nodeType === node.nodeType && sibling.nodeType){

				if(sibling.nodeName == nodeName){
					name += ++count;
				}else{
					count = 1;
					name += '|' + sibling.nodeName.toUpperCase()
				}
			}
			sibling = sibling.previousSibling;
		}
		return name
	}else{
		return ''
	}
}