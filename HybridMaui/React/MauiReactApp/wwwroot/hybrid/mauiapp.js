// set up the app for hybrid
(() => {
    // override the game store with our new one
    window.GameStorageBackendOverride = new HybridGameStorage();
})();
//# sourceMappingURL=mauiapp.js.map