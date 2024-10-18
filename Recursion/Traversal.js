class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function preOrderTraversal(root) {
    if (root === null) {
        return
    }
    console.log(root.val)
    preOrderTraversal(root.left)
    preOrderTraversal(root.right)
}

function inOrderTraversal(root) {
    if (root === null) {
        return
    }
    inOrderTraversal(root.left)
    console.log(root.val)
    inOrderTraversal(root.right)
}

function postOrderTraversal(root) {
    if (root === null) {
        return
    }
    postOrderTraversal(root.left)
    postOrderTraversal(root.right)
    console.log(root.val)
}


let root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)


console.log("In-order Traversal:")
inOrderTraversal(root)


console.log("Pre-order Traversal:")
preOrderTraversal(root)


console.log("Post-order Traversal:")
postOrderTraversal(root)