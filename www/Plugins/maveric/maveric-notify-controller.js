function NotifyComunBase(message, title, icon, type, showProgressbar) {
    var notify = $.notify({
        // options
        icon: icon,
        title: title,
        message: message
    }, {
            // settings
            showProgressbar: showProgressbar,
            type: type,
            mouse_over: 'pause',
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            },
            z_index: 9999,
            delay: 20000,
            placement: {
                from: "bottom",
                align: "right"
            },
        });

    return notify;
}

function NotifyLinkBase(message, title, icon, type, url, target, showProgressbar) {
    var notify = $.notify({
        // options
        icon: icon,
        title: title,
        message: message,
        url: url,
        target: target
    }, {
            // settings
            showProgressbar: showProgressbar,
            mouse_over: 'pause',
            type: type,
            url_target: target,
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            },
            z_index: 9999,
            delay: 20000,
            placement: {
                from: "bottom",
                align: "right"
            },
        });
    return notify;
}


function AutalizaNotify(notify, message) {
    notify.update('message', message);
}

function NotifyInfo(message, title, showProgressbar = false) {
    return NotifyComunBase(message, title, "fa fa-info", "info", showProgressbar);
}

function NotifySuccess(message, title, showProgressbar = false) {
    return NotifyComunBase(message, title, "fa fa-check-circle-o", "success", showProgressbar);
}

function NotifyWarning(message, title, showProgressbar = false) {
    return NotifyComunBase(message, title, "fa fa-exclamation-triangle", "warning", showProgressbar);
}

function NotifyDanger(message, title, showProgressbar = false) {
    return NotifyComunBase(message, title, "fa fa-times-circle-o", "danger", showProgressbar);
}


function NotifyInfoLinkBlank(message, title, url, showProgressbar = false) {
    return NotifyLinkBase(message, title, "fa fa-info", "info", url, "_blank", showProgressbar);
}

function NotifySuccessLinkBlank(message, title, url, showProgressbar = false) {
    return NotifyLinkBase(message, title, "fa fa-check-circle-o", "success", url, "_blank", showProgressbar);
}

function NotifyWarningLinkBlank(message, title, url, showProgressbar = false) {
    return NotifyLinkBase(message, title, "fa fa-exclamation-triangle", "warning", url, "_blank", showProgressbar);
}

function NotifyDangerLinkBlank(message, title, url, showProgressbar = false) {
    return NotifyLinkBase(message, title, "fa fa-times-circle-o", "danger", url, "_blank", showProgressbar);
}

function NotifyInfoLinkSelf(message, title, url, showProgressbar = false) {
    return NotifyLinkBase(message, title, "fa fa-info", "info", url, "_self ", showProgressbar);
}

function NotifySuccessLinkSelf(message, title, url, showProgressbar = false) {
    return NotifyLinkBase(message, title, "fa fa-check-circle-o", "success", url, "_self ", showProgressbar);
}

function NotifyWarningLinkSelf(message, title, url, showProgressbar = false) {
    return NotifyLinkBase(message, title, "fa fa-exclamation-triangle", "warning", url, "_self ", showProgressbar);
}

function NotifyDangerLinkSelf(message, title, url, showProgressbar = false) {
    return NotifyLinkBase(message, title, "fa fa-times-circle-o", "danger", url, "_self ", showProgressbar);
}