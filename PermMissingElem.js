function solution(A) {
    let occurences = new Array(A.length + 1);
    
    for(el of A) {
        occurences[el-1] = 1;
    }

    for(let i = 0; i < occurences.length; i ++) {
        if( occurences[i] === undefined ) return i + 1;
    }
}
