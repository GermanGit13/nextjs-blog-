

//req: es una instancia de http.IncomingMessage , además de algunos middlewares prediseñados .
//res: es una instancia de http.ServerResponse , además de algunas funciones auxiliares .
export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' });
  }