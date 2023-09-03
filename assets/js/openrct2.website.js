var openrct2 = {};

openrct2.Platform = Object.freeze({
    UNKNOWN: {},
    WINDOWS_ARM64: {
        name: 'Windows (ARM64)',
        link: 'https://github.com/OpenRCT2/OpenRCT2/releases/download/v0.4.6/OpenRCT2-0.4.6-windows-installer-arm64.exe',
        size: 56647160,
        version: '0.4.6'
    },
    WINDOWS32: {
        name: 'Windows (32-bit)',
        link: 'https://github.com/OpenRCT2/OpenRCT2/releases/download/v0.4.6/OpenRCT2-0.4.6-windows-installer-win32.exe',
        size: 57215720,
        version: '0.4.6'
    },
    WINDOWS64: {
        name: 'Windows (64-bit)',
        link: 'https://github.com/OpenRCT2/OpenRCT2/releases/download/v0.4.6/OpenRCT2-0.4.6-windows-installer-x64.exe',
        size: 57878256,
        version: '0.4.6'
    },
    MACOS: {
        name: 'macOS',
        link: 'https://github.com/OpenRCT2/OpenRCT2/releases/download/v0.4.6/OpenRCT2-0.4.6-macos-universal.zip',
        size: 83266869,
        version: '0.4.6'
    },
    LINUX: {
        name: 'Linux',
        link: 'https://github.com/OpenRCT2/OpenRCT2/releases/download/v0.4.6/OpenRCT2-0.4.6-linux-x86_64.AppImage',
        size: 89093312,
        version: '0.4.6'
    }
});  // Object.freeze() prevents this from being futzed with

function getPlatform(){
    if (navigator.platform.indexOf('Win') >= 0){
        if (navigator.userAgent.indexOf("ARM64") >= 0 ){
            return openrct2.Platform.WINDOWS_ARM64;
        } else if (navigator.userAgent.indexOf("WOW64") === -1 && navigator.userAgent.indexOf("Win64") === -1 ){
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
