function solution(S) {
    let arr = [];
    for( const el of S.split('')) {
        if(el === ')') {
            if(arr.length === 0) {
                return 0;
            }
            arr.pop();
        } else {
            arr.push(1);
        }
    }
    return +(arr.length === 0);
}
