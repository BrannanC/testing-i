const item = require('./item.js');
const shield = {
    displayName: '[+1] shield',
    baseName: 'shield',
    type: 'armor',
    durability: 93,
    enhancement: 1
}

const badShield = {
    displayName: '[+1] shield',
    baseName: 'shield',
    type: 'armor',
    durability: 24,
    enhancement: 1
}

const maxShield = {
    displayName: '[PEN] shield',
    baseName: 'shield',
    type: 'armor',
    durability: 95,
    enhancement: 20
}

describe('item.js', () => {
    describe('success', () => {
        it('should add 1 to enhancement and name', () => {
            expect(item.success(shield)).toEqual({
                ...shield,
                displayName: '[+2] shield',
                enhancement: 2
            })
        });

        it('should not increment after 20 enhancement', () => {
            expect(item.success(maxShield)).toEqual(maxShield);
        });

        it('should not succeed with 24 durability', () => {
            expect(item.success(badShield)).toEqual(badShield);
        });
    });


    describe('repair', () => {
        it('should set durability to 100', () => {
            expect(item.repair(shield).durability).toBe(100);
        });
    });

    describe('failure', () => {
        it('should not change durability', () => {
            expect(item.failure(shield).durability).toBe(shield.durability);
        });

        it('should set durability to 90', () => {
            expect(item.failure(maxShield)).toEqual({
                ...maxShield,
                displayName: '[TET] shield',
                enhancement: 19,
                durability: 85
            });
        });
    });
});