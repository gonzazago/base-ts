import mongoose, { Schema, Document } from 'mongoose';

interface Candidate extends Document {
    name: string;
    email: string;
}

const CandidateSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true }
});

export default mongoose.model<Candidate>('Candidate', CandidateSchema);