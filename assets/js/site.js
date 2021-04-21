function onCopy(os) {
    const pre = document.querySelector(`pre#${os}-instruction`);
    const input = document.querySelector(`textarea#${os}`);
    input.value = pre.innerHTML.trim();
    input.select();
    document.execCommand('copy');
    input.setSelectionRange(0, 0)
}

function selectOSTab(id) {
    document.querySelector(`li#${id}`).click();
}

let tabsWithContent = function (root) {
    let tabs = root.querySelectorAll(':scope > .tabs li');
    let tabsContent = root.querySelector('.tabs-content').querySelectorAll(':scope > .tab-content');

    let deactvateAllTabs = function () {
        tabs.forEach(function (tab) {
            tab.classList.remove('is-active');
        });
    };

    let hideTabsContent = function () {
        tabsContent.forEach(function (tabContent) {
            tabContent.classList.remove('is-active');
        });
    };

    let activateTabsContent = function (tab) {
        tabsContent[getIndex(tab)].classList.add('is-active');
    };

    let getIndex = function (el) {
        return [...el.parentElement.children].indexOf(el);
    };

    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            deactvateAllTabs();
            hideTabsContent();
            tab.classList.add('is-active');
            activateTabsContent(tab);
        });
    })

    tabs[0].click();
};

(function () {
    document.querySelectorAll('.tabs-with-content').forEach(tabsWithContent)

    const { appVersion } = navigator;
    if (appVersion.indexOf('Win') !== -1) {
        selectOSTab('windows');
    }
    if (appVersion.indexOf('Mac') !== -1) {
        selectOSTab('macos');
    }
    if (appVersion.indexOf('X11') !== -1 || appVersion.indexOf('Linux') !== -1) {
        selectOSTab('linux');
    }
})();
