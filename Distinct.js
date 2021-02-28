function solution(A) {
    let distinct = new Map();
    let distinctCount = 0;

    for( const el of A ) {
        if(!distinct.has(el)) {
            distinct.set(el, 1);
            distinctCount++;
        }
    }

    return distinctCount;
}
