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
        if(element.size() === 0){
            return "La cola esta vacía"
        }
        return this.element[0];
    }
    size(){
        return this.stack.length;
    }
    print(){
        console.log(this.stack);
    }
}
module.exports = Queue;