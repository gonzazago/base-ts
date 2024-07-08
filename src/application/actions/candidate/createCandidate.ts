import { Candidate } from "@entities/Candidate";
import { IBaseService } from "@services/IBaseService";
import { BaseAction } from "./baseAction";

export class CreateCandidateAction extends BaseAction {

    constructor(service: IBaseService<Candidate>) {
        super(service);
    }

    async execute(candidate: Candidate): Promise<Candidate> {
        return await this.service.save(candidate)
    }
}