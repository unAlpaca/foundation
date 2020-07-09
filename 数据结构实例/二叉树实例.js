class TreeNode {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }

    show() {
        return this.data
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    insert(data) {
        let n = new TreeNode(data, null, null);
        if (this.root == null) {
            this.root = n;
        } else {
            let current = this.root;
            let parent;
            while (true) {
                parent = current;

                if (data < current.data) {
                    current = current.left;
                    if (current == null) {
                        parent.left = n;
                        break
                    }
                } else {
                    current = current.right;
                    if (current == null) {
                        parent.right = n;
                        break
                    }
                }
            }
        }
    }

    inOrder(node) {
        let $node = node || this.root;
        let obj = this;
        console.log($node)
        if ($node != null) {
            obj.inOrder($node.left);
            console.log($node.show());
            obj.inOrder($node.right);
        }
    }
}

//中序排序
function inOrder(node) {
    if (node != null) {
        arguments.callee(node.left);
        console.log(node.show() + "");
        arguments.callee(node.right)
    }
}

let tt = new BST();
// console.log(tt)

tt.insert(3);
tt.insert(16);
tt.insert(8);
tt.insert(17);
tt.insert(2)
// console.log(JSON.stringify(tt))
// inOrder(tt.root)
// tt.inOrder()

function ttt(){
	this.name = 'zzz';
	this.age = 14
}

ttt.prototype.say = function(){
	console.log(this.name)
	console.log(this.age)
}

var $t = new ttt();
$t.age = 16;
$t.say()

var $z = new ttt();
$z.say()
