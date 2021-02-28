function solution(A) {
    let maxProfit = 0;
    let bestDay = Infinity;

    for(const el of A) {
        bestDay = Math.min(el, bestDay);
        maxProfit = Math.max(el - bestDay, maxProfit);
    }
    return maxProfit;
}
