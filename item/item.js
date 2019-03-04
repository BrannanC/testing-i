module.exports = {
    repair,
    success
}

function repair(item){
    return {...item, durability: 100}
}

function success(item){
    const en = item.enhancement;
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
            return en
    }
}