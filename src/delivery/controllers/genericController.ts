import { BaseEntity } from "@entities/BaseEntity";
import { BaseRepository } from "@repositories/BaseRepository";
import { IBaseService } from "@services/IBaseService";
import { Request, Response } from "express";

export function genericController<T extends BaseEntity>(
    // getAllUseCase: { execute: () => Promise<T[]> },
    // getByIdUseCase: { execute: (id: number) => Promise<T | null> },
    createUseCase: { execute: (entity: T) => Promise<T> },
    // updateUseCase: { execute: (entity: T) => Promise<void> },
    // deleteUseCase: { execute: (id: number) => Promise<void> }
) {
    return {
        // getAll: async (req: Request, res: Response) => {
        //     const entities = await getAllUseCase.execute();
        //     res.json(entities);
        // },
        // getById: async (req: Request, res: Response) => {
        //     const entity = await getByIdUseCase.execute(Number(req.params.id));
        //     res.json(entity);
        // },
        add: async (req: Request, res: Response) => {
            await createUseCase.execute(req.body);
            res.status(201).send();
        },
        // update: async (req: Request, res: Response) => {
        //     await updateUseCase.execute(req.body);
        //     res.status(204).send();
        // },
        // delete: async (req: Request, res: Response) => {
        //     await deleteUseCase.execute(Number(req.params.id));
        //     res.status(204).send();
        // }
    };
}