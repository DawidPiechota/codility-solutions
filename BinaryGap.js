function solution(N) {
    let largestGap = 0;
    let currentGap = 0;
    let inside = false;
    for(let i = 0; i < 32; i ++) {
        const digit = (N >> i) & 1;
        if(digit === 1){
            if(inside) {
                largestGap = Math.max(currentGap, largestGap);
                currentGap = 0;
            } else {
                inside = true;
                currentGap = 0;
            }
        } else {
            currentGap++;
        }
    }
    return largestGap;
}
