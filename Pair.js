class Pair {
    /**
     * @param {string} left
     * @param {string} right
     */
    constructor(left, right) {
        this.left = left;
        this.right = right;
        // Freeze to make it immutable
        Object.freeze(this);
    }
}

module.exports = Pair;
