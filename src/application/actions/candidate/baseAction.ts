import { Candidate } from "@entities/Candidate";
import { ICandidateRepository } from "@repositories/ICandidateRepository";
import { candidateService } from "@services/CandidateService";
import { IBaseService } from "@services/IBaseService";

export class BaseAction{
    constructor( protected service:IBaseService<Candidate>){
    }
}