import { CreepFactory, ICreateCreepParams } from "../creep";

export class HarvesterFactory extends CreepFactory {
    createCreep({ spawn }: ICreateCreepParams): void {
        const creepName = `Harvester-${Math.floor(Math.random() * 51)}`;

        const bodyParts: BodyPartConstant[] = [WORK, CARRY, MOVE];

        const memory: CreepMemory = {
            role: 'HARVESTER',
            working: false,
            room: spawn.room.name,
        };

        const result = spawn.spawnCreep(bodyParts, creepName, { memory });

        if (result === OK) {
            console.log(`Harvester ${creepName} creado con éxito.`);
        } else {
            console.log(`Error al crear el Harvester ${creepName}: ${result}`);
        }
    }
}
