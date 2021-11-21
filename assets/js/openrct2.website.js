var openrct2 = {};

openrct2.Platform = Object.freeze({
    UNKNOWN: {},
    WINDOWS32: {
        name: 'Windows (32-bit)',
        link: 'https://github.com/OpenRCT2/OpenRCT2/releases/download/v0.3.5.1/OpenRCT2-0.3.5.1-windows-installer-win32.exe',
        size: 13267202,
        version: '0.3.5.1'
    },
    WINDOWS64: {
        name: 'Windows (64-bit)',
        link: 'https://github.com/OpenRCT2/OpenRCT2/releases/download/v0.3.5.1/OpenRCT2-0.3.5.1-windows-installer-x64.exe',
        size: 13967288,
        version: '0.3.5.1'
    },
    MACOS: {
        name: 'macOS',
        link: 'https://github.com/OpenRCT2/OpenRCT2/releases/download/v0.3.5.1/OpenRCT2-0.3.5.1-macos-universal.zip',
        size: 46948944,
        version: '0.3.5.1'
    },
    LINUX: {
        name: 'Linux',
        link: 'https://github.com/OpenRCT2/OpenRCT2/releases/download/v0.3.5.1/OpenRCT2-0.3.5.1-linux-x86_64.AppImage',
        size: 41743552,
        version: '0.3.5.1'
    }
});  // Object.freeze() prevents this from being futzed with

function getPlatform(){
    if (navigator.platform.indexOf('Win') >= 0){
        if (navigator.userAgent.indexOf("WOW64") === -1 && navigator.userAgent.indexOf("Win64") === -1 ){
            return openrct2.Platform.WINDOWS32;
        } else {
            return openrct2.Platform.WINDOWS64;  // 64-bit is the default as it is by far the most common these days
        }
    } else if (navigator.platform.indexOf('Linux') >= 0){
        return openrct2.Platform.LINUX;
    } else if (navigator.platform === 'MacIntel'){
        return openrct2.Platform.MACOS;
    } else {
        return openrct2.Platform.UNKNOWN;
    }
}

openrct2.currentPlatform = getPlatform();
