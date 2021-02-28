function solution(A, K) {
    // I see why this solution is bad in terms of readability,
    // but oneliners are always a fun challenge
    return [...Array(A.length)].map((_, i) => A[( i + A.length - K % A.length ) % A.length]);
}
