let instance = null;

function createToastService() {
  let setMessage = null;

  return {
    init(setToastMessage) {
      setMessage = setToastMessage;
    },
    show(message) {
      if (setMessage) {
        setMessage(message);
      } else {
        console.warn("Toast service is not initialized.");
      }
    },
  };
}

function getToastService() {
  if (!instance) {
    instance = createToastService();
  }

  return instance;
}

export default getToastService;

// init & show methods are Closure
