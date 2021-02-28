function solution(A) {
    const maxCount = 1e9;
    let count = 0;

    let westCars = A.reduce((sum, el) => sum += el,0)

    for(let i = 0; i < A.length; i ++) {
        if(A[i] === 0) count += westCars;
        else westCars--;
        if(count > maxCount) return -1;
    }
    return count;
}
