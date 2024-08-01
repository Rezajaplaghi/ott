import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { HistoryActivity } from "src/entities/history-Activity.entitiy";
import { Repository } from "typeorm";

@Injectable()
export class HistoryService{
    constructor(@InjectRepository(HistoryActivity) private readonly historyRepository:Repository<HistoryActivity>){}


    async login(){
        const log = await this.historyRepository.
    }
}