function solution(A) {
    let sorted = A.slice();
    sorted.sort((a,b) => b - a);
    return Math.max(
        sorted[0] * sorted[1] * sorted[2],
        sorted[0] * sorted[sorted.length-1] * sorted[sorted.length-2]
    );
}
