import { S3 } from "aws-sdk";
import fs from "fs";
import path from "path";

const s3 = new S3({
    accessKeyId: "R",
    secretAccessKey: ""
})
export const uploadFile = async (fileName: string, localFilePath: string) => {
    const fileContent = fs.readFileSync(localFilePath);
    const response = await s3.upload({
        Body: fileContent,
        Bucket: "vercel2003",
        Key: fileName,
    }).promise();
    console.log(response);
}