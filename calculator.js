const calculator = {
    add: function(...args) {
            return args.reduce( (total, currentValue) => {
                return Math.round(total) + Math.round(currentValue);
            });
        },
    substract: (...args) => {
                return args.reduce( (total, cur) => {
                    return Math.round(total) - Math.round(cur);
                    });
        },
    divide: (...args) => {
                return args.reduce( (total, cur) => {
                    return Math.round( Math.round(total) / Math.round(cur));
             });
    },
    multiply: (...args) => {
                return args.reduce( (total, cur) => {
                    return Math.round(total) * Math.round(cur);
                });
    },
}

export { calculator }