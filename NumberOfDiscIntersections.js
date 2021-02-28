function solution(A) {
    let inOut = [];
    let discsIn = 0;
    let answer = 0;
    const offset = A.reduce((acc,el,i) => Math.min(acc,i-el), 0);

    for(let i = 0; i < A.length; i ++) {
        if(inOut[i - A[i] - offset] === undefined) {
            inOut[i - A[i] - offset] = {in: 0, out: 0};
        }
        if(inOut[i + A[i] - offset] === undefined) {
            inOut[i + A[i] - offset] = {in: 0, out: 0};
        }
        inOut[i - A[i] - offset].in ++;
        inOut[i + A[i] - offset].out ++;
    }

    for(const el of inOut) {
        if(el === undefined) continue;
        for(let i = 0; i < el.in; i ++) {
            answer += discsIn;
            discsIn ++;
        }
        discsIn -= el.out;
        if(answer > 1e7) return -1;
    }
    return answer;
}
