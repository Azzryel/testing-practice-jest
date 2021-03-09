import { analyze } from "./analyze";

test("Analyze array of numbers and return object", () => {
    expect(analyze([1, 8, 3, 4,2 , 6])).toEqual({
                                        average: 4,
                                        min: 1,
                                        max: 8,
                                        length: 6,
                                    });
    expect(analyze([5, 5,])).toEqual({
                                        average: 5,
                                        min: 5,
                                        max: 5,
                                        length: 2,
                                    });
    expect(analyze([-1, 0, 2, 3])).toEqual({
                                        average: 1,
                                        min: -1,
                                        max: 3,
                                        length: 4,
                                    });
                                    
});