const zero_repeater = f => x => x;
const pair = (x, y) => f => f(x, y);

const head = p => p((x, y) => x);  
const tail = p => p((x, y) => y);  

const increment_repeater =
    repeater => f => x => f(repeater(f)(x));   

const decrement_repeater =
    repeater =>
        head(repeater(p => pair(tail(p),
                                increment_repeater(tail(p))
                                )
                     )
             (pair(zero_repeater, zero_repeater))
            );
const twice = f => x => f(f(x));
const once = decrement_repeater(twice);