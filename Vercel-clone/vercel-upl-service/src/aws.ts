import { S3 } from "aws-sdk";
import fs from "fs";
import path from "path";

const s3 = new S3({
    accessKeyId: "AKIA3FLDYEWAKJNM7KOR",
    secretAccessKey: "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"
})

// fileName => output/12312/src/App.jsx
// filePath => /Users/harkiratsingh/vercel/dist/output/12312/src/App.jsx
export const uploadFile = async (fileName: string, localFilePath: string) => {
    const fileContent = fs.readFileSync(localFilePath);
    const response = await s3.upload({
        Body: fileContent,
        Bucket: "vercel2003",
        Key: fileName,
    }).promise();
    console.log(response);
}