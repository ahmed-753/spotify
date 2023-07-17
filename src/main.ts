import {NestFactory} from "@nestjs/core";
import {appModule} from "./app.module";

const  start = async  () => {
    try {
        const  PORT = process.env.PORT || 5000;
        const app = await NestFactory.create(appModule)

        await app.listen(PORT,() => console.log(`сервер запущён ${PORT}`))

    }catch (err){
        console.log(err)
    }
}

start()