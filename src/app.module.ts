import {Module} from "@nestjs/common";
import {TrackModule} from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose";

const  pas = 'ahmeb_123'
@Module({
imports:[
    MongooseModule.forRoot(`mongodb+srv://music:${pas}@music.jd2nptb.mongodb.net/?retryWrites=true&w=majority`),
    TrackModule
]

})
export  class appModule {}