import express from "express"

class ExpressServer {

    constructor(port) {
        this.port = port
    }

    setup() {
        const app = express()

        app.get('/', (req, res) => {
            res.send('lern express')
        })

        app.listen(this.port, () => {
            console.log(`Server running with port ${this.port}`)
        })
    }

}

export default ExpressServer