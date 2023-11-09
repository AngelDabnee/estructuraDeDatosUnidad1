const LinkedList = require('../listainversa');

test('Agregar elementos a la lista enlazada, probaremos', () => {
  const linkedList = new LinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);

  expect(linkedList.head.val).toBe(1); 
  expect(linkedList.head.next.val).toBe(2); 
  expect(linkedList.head.next.next.val).toBe(3); 
  expect(linkedList.head.next.next.next).toBeNull(); 
});
test('Agregar elementos a la lista enlazada, probaremos segundo ejemplo', () => {
    const linkedList = new LinkedList();
    linkedList.append(6);
    linkedList.append(7);
    linkedList.append(8);
  
    expect(linkedList.head.val).toBe(6); 
    expect(linkedList.head.next.val).toBe(7); 
    expect(linkedList.head.next.next.val).toBe(8); 
    expect(linkedList.head.next.next.next).toBeNull(); 
  });