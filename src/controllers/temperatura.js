import ServiceTemp from "../services/temperatura.js"

class ControllerTemp {
    ConvertCelToFah(req, res) {
        try {
            const celsius = req.body.cel;

            const fah = ServiceTemp.ConvertCelToFah(celsius)

            res.status(200).send({data: {celsius, fah}})
        } catch (error) {
            res.status(400).send({ msg: error.message })
        }
    }

    ConvertFahToCel(req, res) {
        try {

        } catch (error) {
            res.status(400).send({ msg: error.message })
        }
    }
}

export default new ControllerTemp