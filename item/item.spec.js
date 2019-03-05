const item = require('./item.js');
const shield = {
    displayName: '[+1] shield',
    baseName: 'shield',
    type: 'armor',
    durability: 93,
    enhancement: 1
}

const sword = {
    displayName: '[+6] sword',
    baseName: 'sword',
    type: 'weapon',
    durability: 93,
    enhancement: 6
}

const sixShield = {
    displayName: '[+6] shield',
    baseName: 'shield',
    type: 'armor',
    durability: 93,
    enhancement: 6
}

const fifteenShield = {
    displayName: '[+15] shield',
    baseName: 'shield',
    type: 'armor',
    durability: 93,
    enhancement: 15
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
        it('should not change durability armor < 5', () => {
            expect(item.failure(shield).durability).toBe(shield.durability);
        });

        it('should not change durability weapon < 7', () => {
            expect(item.failure(sword).durability).toBe(sword.durability);
        });

        it('should reduce durability by 5 (enhancement < 15', () => {
            expect(item.failure(sixShield).durability).toBe(88);
        });

        it('should reduce durability by 10 (enhancement >= 15', () => {
            expect(item.failure(fifteenShield).durability).toBe(83);
        });

        it('should reduce durability below 20 (enhancement <= 14', () => {
            expect(item.failure({
                ...sixShield,
                durability: 23
            }).durability).toBe(20);
        });

        it('should reduce durability below 0 (enhancement > 14', () => {
            expect(item.failure({
                ...fifteenShield,
                durability: 8
            }).durability).toBe(0);
        });

        it('should reduce durability by 10 and enhancement by 1 (enhancement > 16)', () => {
            expect(item.failure(maxShield)).toEqual({
                ...maxShield,
                displayName: '[TET] shield',
                enhancement: 19,
                durability: 85
            });
        });
    });
});