async function BooksApiWalkthrough(workflowCtx, portal) {
  return {
    "Step 1": {
      name: "Introduction Guide",
      stepCallback: async () => {
        return workflowCtx.showContent(`## Introduction
This is a guided walkthrough sample. This is yet to be configured`);
      },
    },
  };
}