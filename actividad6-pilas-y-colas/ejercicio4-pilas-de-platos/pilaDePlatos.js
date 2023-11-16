class Strack{
    constructor(){
        this.stack = [];
    }
    push(element){
        this.stack.push(element);
        return this.stack
    }
    pop(){
        return this.stack.pop();
    }
    peek(){
        return this.stack[this.stack.length-1];
    }
    size(){
        return this.stack.length;
    }
    print(){
        console.log(this.stack);
    }
}

module.exports = Strack;

/*const stack = new Strack();
console.log(stack.size());
console.log(stack.push('Angel'));
console.log(stack.push('Ivan'));
console.log(stack.push('Jorge'));
console.log(stack.push('Dan'));
console.log(stack.size());
stack.print()

console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());*/
