export default async function init() {
  if (typeof window) {
    const { worker } = await import("./browser");
    worker.start({
      serviceWorker: {
        url: "/mockServiceWorker.js",
      },
    });
  }
}
