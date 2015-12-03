import Model from './Model';

class Synergy extends Model {
    constructor({ fromId, fromStars, toId, effectId, effectAmount }) {
        super({
            fromId: 'from-champion-uid',
            fromStars: 1,
            toId: 'to-champion-uid',
            effectId: 'effect-uid',
            effectAmount: 0,
        }, {
            fromId,
            fromStars,
            toId,
            effectId,
            effectAmount,
        });
    }
}

export default Synergy;