export const getPageTable = async (
  pageId,
  apiUrl = "https://notion-cloudflare-worker.hyepago.workers.dev/v1"
) => await fetch(`${apiUrl}/table/${pageId}`).then((res) => res.json());

export const getPageBlocks = async (
  pageId,
  apiUrl = "https://notion-cloudflare-worker.hyepago.workers.dev/v1"
) => await fetch(`${apiUrl}/page/${pageId}`).then((res) => res.json());
