const reverse = require('./reverse');

test("reverse a string", () => {
    expect(reverse("reverse")).toMatch("esrever");
    expect(reverse("1: YouJest!")).toMatch("!tseJuoY :1");
    expect(reverse("")).toMatch("");
});