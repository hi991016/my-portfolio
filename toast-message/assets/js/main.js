// SHOW TOAST
function toast({ title = '', message = '', type = 'info', duration = 3000 }) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');
        const icons = {
            success: 'bx bxs-check-circle',
            info: 'bx bxs-info-circle',
            warning: 'bx bxs-error-circle',
        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        // AUTO REMOVE TOAST
        const autoRemoveId = setTimeout(function() {
            main.removeChild(toast);
        }, duration + 1000);

        // REMOVE TOAST WHEN CLICKED
        toast.onclick = function (e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId)
            }
        }
        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `
            <div class="toast__icon">
                <i class='${icon}'></i>
            </div>
            <div class="toast__message">
                <div class="toast__title">${title}</div>
                <div class="toast__desc">${message}</div>
            </div>
            <div class="toast__close">
                <i class='bx bx-x'></i>
            </div>
        `;
        main.appendChild(toast);
    }
}


function showSuccessToast() {
    toast({
        title: 'Success',
        message: 'Anywone with access can view your invited visitors.',
        type: 'success',
        duration: 3000
    })
}

function showInfoToast() {
    toast({
        title: 'Info',
        message: 'Anywone with access can view your invited visitors.',
        type: 'info',
        duration: 3000
    })
}

function showWarningToast() {
    toast({
        title: 'Warning',
        message: 'Anywone with access can view your invited visitors.',
        type: 'warning',
        duration: 3000
    })
}