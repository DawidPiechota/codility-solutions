function solution(A) {
    let counter = new Map();
    let maxOccurrence = -Infinity;
    let maxOccurrenceIndex = -1;
    A.forEach((el, i) => {
        if(counter.has(el)) {
            counter.set(el, {occ: counter.get(el).occ + 1, idx: i});
        } else {
            counter.set(el, {occ: 1, idx: i});
        }
    });

    counter.forEach((value) => {
        if(value.occ > maxOccurrence) {
            maxOccurrence = value.occ;
            maxOccurrenceIndex = value.idx;
        }
    })

    if(maxOccurrence > A.length / 2) {
        return maxOccurrenceIndex;
    }
    return -1;
}
