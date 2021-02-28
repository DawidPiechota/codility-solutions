function solution(N, A) {
    let counters = new Array(N).fill(0);
    let maxCounter = 0;
    let prevMaxCounter = 0;

    for(const el of A) {
        if(el === N + 1) {
            prevMaxCounter = maxCounter;
        } else {
            counters[el-1] = counters[el-1] < prevMaxCounter ?
            prevMaxCounter + 1
            : counters[el-1] + 1

            maxCounter = Math.max(counters[el-1], maxCounter);
        }
    }
    counters = counters.map( el => el < prevMaxCounter ? prevMaxCounter : el);

    return counters;
}
