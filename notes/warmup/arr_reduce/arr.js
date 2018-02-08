function total(arr) {
    return arr.reduce((total, num) => {
        return total + num;
    }, 0)
}

function stringConcat(arr) {
    return arr.reduce((total, curr) => {
        curr = String(curr);
        return total + curr;
    }, "")
}

function totalVotes(arr) {
    return arr.reduce((total, curr) => {
        if (curr.voted) {
            return total + 1;
        } else {
            return total;
        }
        // or you can do this return curr.voted ? total + 1 : total;
    }, 0)
}

function shoppingSpree(arr) {
    return arr.reduce((total, curr) => {
        return total + curr.price;
    }, 0)
}

function flatten(arr) {
    return arr.reduce((total, curr) => {
        return [...total, ...curr];
    })
}

function voterResults(arr) {
    return arr.reduce((total, curr) => {
        if (curr.age < 26) {
            total.youth++;
            if (curr.voted) {
                total.youngVotes++;
            }
            return total;
        } else if (curr.age < 36) {
            total.mids++;
            if (curr.voted) {
                total.midVotes++;
            }
            return total;
        } else if (curr.age < 56) {
            total.olds++;
            if (curr.voted) {
                total.oldVotes++;
            }
            return total;
        }
    }, {
        youngVotes: 0,
        youth: 0,
        midVotes: 0,
        mids: 0,
        oldVotes: 0,
        olds: 0
    });
}
// complicated version
// return {
//     youngVotes: arr.reduce((total, curr) =>{
//         if(curr.voted && curr.age < 26) {
//             return total + 1;
//         } else {
//             return total;
//         }
//     }),
// younVotes: 1,
// youth: 4,
// midVotes: 3,
// mids: 4,
// oldVotes: 3,
// olds: 4


module.exports = {
    total,
    stringConcat,
    totalVotes,
    shoppingSpree,
    flatten,
    voterResults
}