function solution(X, A) {
    let leaves = [];
    let counter = 0;

    for(let i = 0; i < A.length; i ++) {
        if(leaves[ A[i] - 1 ] === undefined) {
            leaves[ A[i] - 1 ] = 1;
            counter++;
        }
        if(counter === X) {
            return i;
        }
    }
    return -1;
}
