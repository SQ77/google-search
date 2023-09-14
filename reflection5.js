// Q1
function flatten_list(xs) {
    return accumulate(append, null, xs);
}

const LoL = list(list(1, 2), list(3, 4, 5, 6), null, list(7, 8, 9));
display_list(flatten_list(LoL));
// Returns list(1, 2, 3, 4, 5, 6, 7, 8, 9)


/*
// Q2
function tree_sum(tree) {
    return is_null(tree)
            ? 0
            : (is_list(head(tree))
                ? tree_sum(head(tree))
                : head(tree))
            + tree_sum(tail(tree));
}

const my_tree = list(1, list(2, list(3, 4), 5), list(6, 7));
tree_sum(my_tree);
// Returns 28
*/

/*
// Q3
function flatten_list(xs) {
    return is_null(xs)
            ? null
            : is_list(head(xs))
            ? append(flatten_list(head(xs)), flatten_list(tail(xs)))
            : pair(head(xs), flatten_list(tail(xs)));
}

function accumulate_tree(f, op, initial, tree) {
    return accumulate(((x, y) => is_list(x)
                                ? op(x, y)
                                : f(x)),
                        initial, tree);
}

function flatten(tree) {
    return accumulate_tree(x => list(x), append, null, tree);
}

const LoL = list(list(1, 2), list(3, 4, 5, 6), null, list(7, 8, 9));
display_list(flatten(LoL));
// Returns list(1, 2, 3, 4, 5, 6, 7, 8, 9) 
*/