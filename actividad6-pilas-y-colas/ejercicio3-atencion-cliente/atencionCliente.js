class Queue{
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
    dequeque(){
        if(this.isEmpty()){
            return "Cola Vacía"
        }
        return this.element.shift();
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
    isEmpty() {
        return this.stack.length === 0;
    }
}
module.exports = Queue;