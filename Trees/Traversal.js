class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
// Pre-order Traversal
function preOrderTraversal(root) {
    if (!root) return [];
    
    const result = [];
    const stack = [root];

    while (stack.length) {
        const node = stack.pop();
        result.push(node.value);
        
        // Push right child first so that left child is processed first
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }

    return result;
}
// In-order Traversal
function inOrderTraversal(root) {
    const result = [];
    const stack = [];
    let current = root;

    while (current || stack.length) {
        // Go to the leftmost node
        while (current) {
            stack.push(current);
            current = current.left;
        }
        
        // Process the node
        current = stack.pop();
        result.push(current.value);
        
        // Move to the right node
        current = current.right;
    }

    return result;
}

// Post-order Traversal
function postOrderTraversal(root) {
    if (!root) return [];
    
    const result = [];
    const stack = [root];
    const outputStack = [];

    while (stack.length) {
        const node = stack.pop();
        outputStack.push(node.value);
        
        // Push left and right children to stack
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }

    // Reverse the outputStack to get the post-order traversal
    while (outputStack.length) {
        result.push(outputStack.pop());
    }

    return result;
}

// Example binary tree creation
const root = new TreeNode('A');
root.left = new TreeNode('B');
root.right = new TreeNode('C');
root.left.left = new TreeNode('D');
root.left.right = new TreeNode('E');
root.right.right = new TreeNode('F');

// Call traversal functions
console.log("Pre-order Traversal:", preOrderTraversal(root)); // Output: ['A', 'B', 'D', 'E', 'C', 'F']
console.log("In-order Traversal:", inOrderTraversal(root));   // Output: ['D', 'B', 'E', 'A', 'C', 'F']
console.log("Post-order Traversal:", postOrderTraversal(root)); // Output: ['D', 'E', 'B', 'F', 'C', 'A']