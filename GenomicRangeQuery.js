function solution(S, P, Q) {
    function nucToImpact(nucleotide) {
        if(nucleotide === "A") return 1;
        else if(nucleotide === "C") return 2;
        else if(nucleotide === "G") return 3;
        else if(nucleotide === "T") return 4;
    }
    let base = {
        1: 42,
        2: 42,
        3: 42,
    };
    let lastSeen = [];
    let answer = [];

    for(const nucleotide of S) {
        const impact = nucToImpact(nucleotide);
        switch(impact) {
            case 1: {
                base = {
                    1: 0,
                    2: base[2] + 1,
                    3: base[3] + 1,
                };
                break;
            }
            case 2: {
                base = {
                    1: base[1] + 1,
                    2: 0,
                    3: base[3] + 1,
                };
                break;
            }
            case 3: {
                base = {
                    1: base[1] + 1,
                    2: base[2] + 1,
                    3: 0,
                }
                break;
            }
            case 4: {
                base = {
                    1: base[1] + 1,
                    2: base[2] + 1,
                    3: base[3] + 1,
                }
                break;
            }
        }
        lastSeen.push(base);
    }
    for(let i = 0; i < P.length; i ++) {
        const range = Q[i] - P[i];
        if(lastSeen[Q[i]][1] <= range) answer.push(1);
        else if(lastSeen[Q[i]][2] <= range) answer.push(2);
        else if(lastSeen[Q[i]][3] <= range) answer.push(3);
        else answer.push(4);
    }
    return answer;
}
