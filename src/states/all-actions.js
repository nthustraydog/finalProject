export function setID(ID) {
    return {
        type: '@ALL/SETID',
        ID
    };
}

export function setEachDisplay(display) {
    return {
        type: '@ALL/SETEACHDISPLAY',
        display
    };
}
