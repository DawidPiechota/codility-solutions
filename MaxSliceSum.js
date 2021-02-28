function solution(A) {
    let maxSum = -Infinity;
    let maxSumEnding = 0;

    for(const el of A) {
        maxSumEnding = Math.max(maxSumEnding + el, el);
        maxSum = Math.max(maxSumEnding, maxSum);
    }

    return maxSum;
}
