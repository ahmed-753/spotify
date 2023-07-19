import {Module} from "@nestjs/common";
import {TrackModule} from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose";
import { FileModule } from "./file/file.module";

const  pas = 'ahmeb_123'
@Module({
imports:[
    MongooseModule.forRoot(`mongodb+srv://music:${pas}@music.jd2nptb.mongodb.net/?retryWrites=true&w=majority`),
    TrackModule,
     FileModule
]

})
export  class appModule {}