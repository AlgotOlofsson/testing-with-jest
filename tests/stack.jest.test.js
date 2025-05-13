const stack = require('../src/stack');

test('peek returns same value twice if stack is unchanged', () =>{
    stack.push('bananfluga');
    const one = stack.peek();
    const two = stack.peek();
    expect(one).toBe(two);
});