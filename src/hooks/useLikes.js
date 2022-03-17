const useLikes = () => {
  const toggleState = (allStates, setAllStates, index) => {
    const allStatesCopy = [...allStates];
    allStatesCopy[index] = !allStatesCopy[index];
    setAllStates(allStatesCopy);
  };

  const getState = (allStates, index) => {
    if (Array.isArray(allStates) && allStates.length > 0) {
      return allStates[index];
    }
    return false;
  };

  return {
    toggleState,
    getState,
  };
};

export default useLikes;
