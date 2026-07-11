from http.server import BaseHTTPRequestHandler
import json

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()

        data = {
            "message": "Sos una gran persona, gracias por hacerme el aguante tanto en stream como acá conmigo, gracias por esas charlas tan lindas que tengo con vos y me gustaría tener más así, te quiero. Pd: jugás muy bien al Overwatch"
        }

        self.wfile.write(json.dumps(data).encode('utf-8'))
        return
