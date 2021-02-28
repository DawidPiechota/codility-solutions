function solution(S) {
    let brackets = [];

    for(const el of S) {
        if( el === '(' || el === '[' || el === '{' ) {
            brackets.push(el);
        } else {
            if(brackets.length === 0) {
                return 0;
            }
            if(el === ')' && brackets[brackets.length-1] !== '(') return 0;
            if(el === ']' && brackets[brackets.length-1] !== '[') return 0;
            if(el === '}' && brackets[brackets.length-1] !== '{') return 0;
            brackets.pop();
        }
    }
    return +( brackets.length === 0 );
}
