export interface ICreateCreepParams {
    spawn: StructureSpawn;
}

export abstract class CreepFactory {
    abstract createCreep(params: ICreateCreepParams): void;
}
