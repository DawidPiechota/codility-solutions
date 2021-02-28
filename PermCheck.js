function solution(A) {
    let m = new Map();

    for(const el of A) {
        if(m.has(el) || el > A.length) {
            return 0;
        }
        m.set(el, 1);
    }
    if(m.size === A.length) {
        return 1
    }
    return 0;
}