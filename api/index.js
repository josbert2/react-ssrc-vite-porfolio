import app from '../server.js'

// Vercel capturará esta función por defecto.
export default function handler(req, res) {
  return app(req, res)
}