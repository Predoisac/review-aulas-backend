class ServiceTemp {
    ConvertCelToFah(cel) {
        if(isNaN(cel)) {
            throw new Error("Favor colocar somente números.")
        }
        return (cel * 9 + 160) / 5
    }
    ConvertFahToCel() {

    }
}

export default new ServiceTemp