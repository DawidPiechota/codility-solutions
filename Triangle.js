function solution(A) {
    const sorted = A.slice();
    sorted.sort((a,b) => b - a );

    for( let i = 0; i < sorted.length - 2; i ++) {
        if(
            sorted[i] + sorted[i+1] > sorted[i+2] &&
            sorted[i+1] + sorted[i+2] > sorted[i] &&
            sorted[i] + sorted[i+2] > sorted[i+1]
        ) return 1;
    }
    return 0;
}
