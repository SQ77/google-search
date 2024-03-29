// studio 5 in class sheet

// Q1: returns a list containing all elements of odd index
function every_second(items) {
    return is_null(items) || length(items) === 1
            ? null
            : pair(list_ref(items, 1), every_second(tail(tail(items))));
}

every_second(list("a", "x", "b", "y", "c", "z", "d"));

// Q2: helper function that returns sum of list
function sums_of_list(items) {
    return is_null(items) 
            ? 0
            : list_ref(items, 0) + sums_of_list(tail(items));
}

// Q2: returns list containing two elements
// first element: sum of all elements of even index
// second element: sum of all elements of odd index
function sums(items) {
    const odds = every_second(items);
    const evens = pair(list_ref(items, 0), every_second(tail(items)));
    return list(sums_of_list(evens), sums_of_list(odds));
}

sums(list(1, 2, 3, 4, 5, 6, 7));