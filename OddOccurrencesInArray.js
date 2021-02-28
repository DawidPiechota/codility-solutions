function solution(A) {
    let occurances = new Map();
    
    for( el of A ) {
        if(occurances.has(el)) {
            occurances.delete(el);
        } else {
            occurances.set(el, 1);
        }
    }
    return occurances.keys().next().value;
}
