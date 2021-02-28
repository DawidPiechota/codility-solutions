function solution(A, B) {
    let aliveFishCount = B.length;
    let downFish = [];

    for( let i = 0; i < B.length; i ++) {
        if( B[i] === 1 ) {
            downFish.push(A[i]);
        } else {
            while(downFish.length !== 0) {
                if(A[i] > downFish[downFish.length - 1]) {
                    downFish.pop();
                    aliveFishCount--;
                } else {
                    aliveFishCount--;
                    break;
                }
            }
        }
    }
    return aliveFishCount;
}
