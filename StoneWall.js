function solution(H) {
    let level = [];
    let blockCount = 0;

    for(const height of H) {
        for (;;) { 
            if(level.length === 0) {
                level.push(height);
                blockCount++;
                break;
            } else if( height === level[level.length - 1]) {
                break;
            } else if(height > level[level.length - 1]) {
                level.push(height);
                blockCount++;
                break;
            } else { // if(height < level[level.length - 1])
                level.pop();
            }
        }
    }
    return blockCount;
}
