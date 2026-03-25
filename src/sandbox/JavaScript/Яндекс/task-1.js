function callLimit(fn, limit, cb) {
    let counter = 0;

    function limited(...args) {
        counter++;

        if (counter > limit) return;
        if (counter === limit && typeof cb === "function") {
            const result = fn.apply(this, args);
            cb();
            return result;
        }

        return fn.apply(this, args);
    }

    limited.reset = function () {
        counter = 0;
    };

    return limited;
}

const fn = () => console.log("nen");

const decoratedFn = callLimit(fn, 3, () => console.log("limit"));

decoratedFn();
decoratedFn();
decoratedFn.reset();
decoratedFn();
decoratedFn();
decoratedFn();
decoratedFn();
