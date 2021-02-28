function solution(A) {
    let integers = new Map();

    for(const el of A) {
        if(el > 0) {
            integers.set(el, 1);
        }
    }

    for(let i = 1;; i ++) {
        if(!integers.has(i)) {
            return i;
        }
    }
}
