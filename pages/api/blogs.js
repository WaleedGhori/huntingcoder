import * as fs from 'fs';

export default async function handler(req, res) {

    let data = await fs.promises.readdir("blogdata");
    let myFile;
    let allBlogs = [];
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      myFile = await fs.promises.readFile(("blogdata/"+item), 'utf-8')
      allBlogs.push(JSON.parse(myFile))
  }
  res.status(200).json(allBlogs);
}