import * as fs from 'fs';
export default function handler(req, res) {
  fs.readFile("blogdata/how-to-learn-javascipt.json", 'utf-8', (err, data) => {
    res.status(200).json(JSON.parse(data));
  })
}
