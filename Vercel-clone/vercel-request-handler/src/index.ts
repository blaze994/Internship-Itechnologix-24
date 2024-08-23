import express from "express";
import {S3} from "aws-sdk";
import path, { resolve } from "path";
import fs from "fs";




const s3 = new S3({
    accessKeyId: "",
    secretAccessKey: ""
})

const app = express();



app.get("/*", async (req, res) => {

    const host = req.hostname;
    console.log(host);
    const id = host.split(".")[0];
    const filePath = req.path;
    console.log(id);

    const contents = await s3.getObject({
        Bucket: "vercel2003",
        Key: `dist/${id}${filePath}`
    }).promise();
    
    const type = filePath.endsWith("html") ? "text/html" : filePath.endsWith("css") ? "text/css" : "application/javascript"
    res.set("Content-Type", type);

    res.send(contents.Body);
})
app.listen(3001);