const Pair = require('./Pair');
const SynonymousFilter = require('./SynonymousFilter');

const SYNONYMS = [
    new Pair('approval', 'popularity'),
    new Pair('rate', 'ratings')
];

const SENTENCES = [
    new Pair('trump approval rate', 'trump popularity ratings'),
    new Pair('trump approval rates', 'trump popularity ratings'),
    new Pair('trump approval rate', 'popularity ratings trump')
];

// TODO: Define the expected result here
const EXPECTATION = [];

function main() {
    try {
        const underTest = new SynonymousFilter(SYNONYMS);
        const result = underTest.filter(SENTENCES);

        if (checkExpectation(EXPECTATION, result)) {
            console.log("Correct result!");
        } else {
            console.log("Test Failed.");
            console.log("\nExpected:");
            console.log(formatPairs(EXPECTATION));
            console.log("\nActual:");
            console.log(formatPairs(result));
        }
    } catch (e) {
        console.error("Runtime Error:", e);
    }
}

function checkExpectation(expected, actual) {
    if (!Array.isArray(actual)) return false;
    // Deep comparison of the Pair objects
    return JSON.stringify(expected) === JSON.stringify(actual);
}

function formatPairs(pairs) {
    if (!Array.isArray(pairs)) return "  (invalid output)";
    if (pairs.length === 0) return "  []";
    return "  " + JSON.stringify(pairs, null, 0).replace(/\},\{/g, "},\n  {");
}

main();
