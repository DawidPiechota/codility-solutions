function solution(A) {
    function getSlice(from, to) {
        return prefixSum[to] - (prefixSum[from-1] || 0);
    }
    let prefixSum = [A[0]];
    let minSliceStart = -1;
    let minSliceValue = Infinity;
    for(let i = 1; i < A.length; i ++) {
        prefixSum[i] = prefixSum[i-1] + A[i];
    }

    for(let i = 0; i < A.length - 2; i ++) {
        const slice2 = getSlice(i, i+1) / 2;
        const slice3 = getSlice(i, i+2) / 3;
        if( slice2 < minSliceValue ) {
            minSliceStart = i;
            minSliceValue = slice2;
        }
        if( slice3 < minSliceValue ) {
            minSliceStart = i;
            minSliceValue = slice3;
        }
    }
    if(getSlice(A.length-2, A.length-1) / 2 < minSliceValue) return A.length - 2;
    return minSliceStart;
}