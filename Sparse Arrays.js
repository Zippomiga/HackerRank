// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

// Example

// strings = ['ab', 'ab', 'abc']
// queries = ['ab', 'abc','bc']

// There are 2 instances of 'ab', 1 of 'abc' and 0 of 'bc'. For each query, add an element to the return array, results = [2,1,0].

function matchingStrings(strings, queries) {
    let results = []

    queries.forEach(e => {
        let c = 0
        for(let x of strings) if(e === x) c++
        results.push(c)
    })

    return results
}