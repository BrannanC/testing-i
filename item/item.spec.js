const item = require('./item.js');
const shield = {
    displayName: '[+1] shield',
    baseName: 'shield',
    type: 'armor',
    durability: 93,
    enhancement: 1
}

const maxShield = {
    displayName: '[PEN] shield',
    baseName: 'shield',
    type: 'armor',
    durability: 93,
    enhancement: 20
}

describe('item.js', () => {
    describe('success', () => {
        it('should add 1 to enhancement and name', () => {
            expect(item.success(shield)).toEqual({
                displayName: '[+2] shield',
                baseName: 'shield',
                type: 'armor',
                durability: 93,
                enhancement: 2
            })
        });

        it('should not increment after 20 enhancement', () => {
            expect(item.success(maxShield)).toEqual(maxShield);
        });
    });


    describe('repair', () => {
        it('should set durability to 100', () => {
            expect(item.repair(shield).durability).toBe(100);
        });
    });
});