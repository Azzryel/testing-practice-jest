import { capitalize } from "./capitalize"

test ("capitalize a string", () => {
    expect (capitalize("capitalize")).toMatch("CAPITALIZE");
    expect (capitalize("2")).toMatch("2");
    expect (capitalize("number: 1")).toMatch("NUMBER: 1");
    expect (capitalize("")).toMatch("");
} );