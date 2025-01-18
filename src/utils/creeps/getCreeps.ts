export const getAllCreeps = () => {
    return Object.keys(Game.creeps).map(creepName => Game.creeps[creepName]);
};
