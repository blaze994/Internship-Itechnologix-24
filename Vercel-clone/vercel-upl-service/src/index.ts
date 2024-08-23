import express from 'express';
import cors from 'cors';
import redis, { createClient } from 'redis';
import simpleGit from 'simple-git';
import { generate } from './utils';
import path from "path";
import { getAllFiles } from './file';
import { uploadFile } from './aws';


// publisher to the queue
const publisher = createClient();
publisher.connect();

//pull from the queue
const subscriber = createClient();
subscriber.connect();





const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());


app.post('/deploy' , async(req,res)=>{
    const repoUrl = req.body.repoUrl;
    const id = generate();
    await simpleGit().clone(repoUrl,path.join(__dirname,`output/${id}`)); //clone github repo
    const files = getAllFiles(path.join(__dirname,`output/${id}`))    // Extract files and send to S3


    files.forEach(async file =>{
      await uploadFile(file.slice(__dirname.length+1),file);
    })

    await new Promise((resolve) => setTimeout(resolve, 5000))
    publisher.lPush("build-queue", id);  // publish id to redis queue
    publisher.hSet("status",id,"upload");

    res.json({
      id : id
    })
})



app.get("/status", async (req, res) => {
  const id = req.query.id;
  const response = await subscriber.hGet("status", id as string);
  res.json({
      status: response
  })
})

app.listen(port)

