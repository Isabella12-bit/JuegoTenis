import obtenerScore from "./sumador.js";

describe("Puntaje", () => {
  it("deberia devolver love love", () => {
    expect(obtenerScore(0, 0)).toEqual("love - love");
  });
});

describe("Puntaje", () => {
  it("deberia devolver 15 - 0", () => {
    expect(obtenerScore(1, 0)).toEqual("15 - 0");
  });
});