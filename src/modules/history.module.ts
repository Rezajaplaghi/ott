import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { HistoryActivity } from "src/entities/history-Activity.entitiy";
import { HistoryService } from "src/services/history.service";

@Module({
    imports:[TypeOrmModule.forFeature([HistoryActivity])],
    controllers:[],
    providers:[HistoryService]
})
export class HistoryModule{}