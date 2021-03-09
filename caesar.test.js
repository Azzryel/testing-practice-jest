import { caesar } from "./caesar";

test("Caesar cypher", () => {
    expect(caesar("Z", 1)).toMatch("A");
    expect(caesar("Z", 3)).toMatch("C");
    expect(caesar("Z", 26)).toMatch("A");
    expect(caesar("z", 1)).toMatch("a");
    expect(caesar("z", 3)).toMatch("c");
    expect(caesar("z", 26)).toMatch("a");
    expect(caesar("!", 100)).toMatch("!");
    expect(caesar(" ", 1)).toMatch(" ");

    expect(caesar("I dance.", 1)).toMatch("J ebodf.");
    expect(caesar(`Say: "code";`, 1)).toMatch(`Tbz: "dpef";`);
});