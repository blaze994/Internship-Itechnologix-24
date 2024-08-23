import { commandOptions, createClient } from "redis";
import { copyFinalDist, downloadS3Folder } from "./aws";
import { buildProject } from "./utils";

// build instead of dist
const subscriber = createClient();
subscriber.connect();
const publisher = createClient();
publisher.connect();


async function main(){
    while (true){
        const res = await  subscriber.brPop(
            commandOptions({ isolated : true }),
            'build-queue',
            0
        );
        if (res!=null){
            const id = res.element;
            await downloadS3Folder(`output/${res.element}`);
            await buildProject(id);
            await copyFinalDist(id);
            publisher.hSet("status",id,"deployed");
           
        }
    }
}
main();