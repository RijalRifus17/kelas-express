import ExpressServer from './ExpressServer'
import Qodr from './Qodr'

Qodr.Yogyakarta()

const server = new ExpressServer(3000)

server.setup()
