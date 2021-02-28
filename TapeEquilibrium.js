function solution(A) {
    let sumRight = A.reduce((sum, el) => sum += el , 0);
    let sumLeft = 0;
    let minSum = Number.MAX_SAFE_INTEGER;

    for(let i = 0; i < A.length - 1; i ++) {
        sumLeft += A[i];
        sumRight -= A[i];
        minSum = Math.min( Math.abs( sumLeft - sumRight ), minSum );
    }
    return minSum
}
