function onCopy(os) {
    const pre = document.querySelector(`pre#${os}-instruction`);
    const input = document.querySelector(`textarea#${os}`);
    input.value = pre.innerHTML;
    input.select();
    document.execCommand('copy');
    input.setSelectionRange(0, 0)
}

function selectOSTab(id) {
    document.querySelector(`input[type="radio"]#${id}`).setAttribute('checked', true);
}

function detectOS() {
    const {appVersion} = navigator;
    if (appVersion.indexOf('Win') !== -1) {
        selectOSTab('windows');
    }
    if (appVersion.indexOf('Mac') !== -1) {
        selectOSTab('macos');
    }
    if (appVersion.indexOf('X11') !== -1 || appVersion.indexOf('Linux') !== -1) {
        selectOSTab('linux');
    }
}

detectOS();
