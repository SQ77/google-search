import {show, ribbon, stack, beside, circle, blank, square, stack_frac, beside_frac} from 'rune';

function moony_1(bottom_right) {
    return stack(beside(circle, blank), 
                beside(square, bottom_right));
}

function moony_2(n) {
    return n === 1 
            ? circle
            : moony_1(moony_2(n - 1));
}

function new_moony(bottom_right, m) {
    return stack_frac(1/m, beside_frac(1/m, circle, blank),
                    beside_frac(1/m, square, bottom_right));
}

function moony(n) {
    return n === 1
            ? circle
            : new_moony(moony(n - 1), n);
}

show(moony_1(ribbon));
show(moony_2(5));
show(moony(5));