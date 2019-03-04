module.exports = {
    repair,
    success,
    failure
}

function repair(item){
    return {...item, durability: 100}
}

function success(item){
    const en = item.enhancement;
    const du = item.durability;
    if(du < 10){
        return {
            ...item
        }
    }
    if(en < 15 && du < 25){
        return {
            ...item
        }
    }
    switch(true){
        case (en < 15):
            return {
                ...item,
                displayName: `[+${en+1}] ${item.baseName}`,
                enhancement: en + 1
            }
        case (en === 15):
            return {
                ...item,
                displayName: `[PRI] ${item.baseName}`,
                enhancement: 16
            }
        case (en === 16):
            return {
                ...item,
                displayName: `[DUO] ${item.baseName}`,
                enhancement: 17
            }
        case (en === 17):
            return {
                ...item,
                displayName: `[TRI] ${item.baseName}`,
                enhancement: 18
            }
        case (en === 18):
            return {
                ...item,
                displayName: `[TET] ${item.baseName}`,
                enhancement: 19
            }
        case (en === 19):
            return {
                ...item,
                displayName: `[PEN] ${item.baseName}`,
                enhancement: 20
            }
        case (en === 20):
            return {
                ...item
            }
        default:
            return {...item}
    }
}

function failure(item){
    const en = item.enhancement;
    let du = item.durability;
    if(en < 5){
        return {
            ...item
        }
    }
    if(item.type === 'weapon' && en < 7){
        return {
            ...item
        }
    }
    switch(true){
        case (en < 15):
            du = du < 25 ? 20 : du - 5;
            return {
                ...item,
                durability: du
            }
        case (en === 15):
            du = du < 10 ? 0 : du - 10;
            return {
                ...item,
                durability: du
            }
        case (en === 16):
            du = du < 10 ? 0 : du - 10;
            return {
                ...item,
                durability: du,
                enhancement: 15,
                displayName: `[+15] ${item.baseName}`
            }
        case (en === 17):
            du = du < 10 ? 0 : du - 10;
            return {
                ...item,
                durability: du,
                enhancement: 16,
                displayName: `[PRI] ${item.baseName}`
            }
        case (en === 18):
            du = du < 10 ? 0 : du - 10;
            return {
                ...item,
                durability: du,
                enhancement: 17,
                displayName: `[DUO] ${item.baseName}`
            }
        case (en === 19):
            du = du < 10 ? 0 : du - 10;
            return {
                ...item,
                durability: du,
                enhancement: 18,
                displayName: `[TRI] ${item.baseName}`
            }
        case (en === 20):
            du = du < 10 ? 0 : du - 10;
            return {
                ...item,
                durability: du,
                enhancement: 19,
                displayName: `[TET] ${item.baseName}`
            }
        default:
            return {...item};
    }
}