export const transport = (creep: Creep, spawn: StructureSpawn) => {
    creep.moveTo(spawn);
    creep.transfer(spawn, RESOURCE_ENERGY);
}
