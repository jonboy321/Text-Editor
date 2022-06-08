const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    if (isTooSoon) {
        e.preventDefault(); // Prevents prompt display
        // Prompt later instead:
        setTimeout(function() {
          isTooSoon = false;
          e.prompt(); // Throws if called more than once or default not prevented
        }, 10000);
      }
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});
