
import { Candidate } from "@entities/Candidate";
import { ICandidateRepository } from './ICandidateRepository';
import CandidateModel from '@infrastructure/persistence/mongo/CandidateSchema';
export const createCandidateRepository = (): ICandidateRepository => {

    return {
        getAll: async () => {
            return await CandidateModel.find();
        },
        getById: async (id: string) => {
            return await CandidateModel.findById(id)
        },
        save: async (candidate: Candidate): Promise<Candidate> => {
            const candidateModel = new CandidateModel({ name: candidate.name, email: candidate.email })
            const candidateSave = await candidateModel.save()
            const response: Candidate = { id: candidateSave.id, name: candidateSave.name, email: candidateSave.email }
            return response


        },
        update: async (entity: Candidate, id: string) => {
            const candidate = await CandidateModel.findById(id)

            const candidateUpdate = await CandidateModel.findByIdAndUpdate(id, {
                name: entity.name,
                email: entity.email
            });
            if (!candidateUpdate) {
                return Promise.reject(`Candidate not found for id[${id}]`)
            }
            const response: Candidate = { id: candidateUpdate.id, name: candidateUpdate.name, email: candidateUpdate.email }
            return response
        },
        delete: async (id: string) => {
            CandidateModel.findByIdAndDelete(id);
        }

    }
}