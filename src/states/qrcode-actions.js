export function transferData(data) {
    return {
        type: '@QRCODE/TRANSFER',
        data
    };
}
export function goToCamera() {
    return {
        type: '@QRCODE/GOTOCAMERA'
    }
}
export function goBackAccom() {
    return {
        type: '@QRCODE/GOBACKACCOM'
    };
}
