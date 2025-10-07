import {describe, it, expect} from "@jest/globals"
import ServiceTemp from "../src/services/temperatura.js"

describe("Testando Cel To Fah", () => {
    it("testando valor 0", () => {
        const fah = ServiceTemp.ConvertCelToFah(0)

        expect(fah).toBe(32)
    })
    it("testando valor 10", () => {
        const fah = ServiceTemp.ConvertCelToFah(10)

        expect(fah).toBe(50)
    })
    it("testando valor -25", () => {
        const fah = ServiceTemp.ConvertCelToFah(-25)

        expect(fah).toBe(-13)
    })
})