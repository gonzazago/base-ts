
import { createCandidateRepository } from "@repositories/CandidateRepository";
import { candidateService } from "@services/CandidateService";
import { CreateCandidateAction } from "@actions/candidate/createCandidate"
import { genericController } from "./genericController";

const repository = createCandidateRepository();
const service = candidateService(repository);

const createCandidate = new CreateCandidateAction(service)

export const candidateController = genericController(createCandidate);