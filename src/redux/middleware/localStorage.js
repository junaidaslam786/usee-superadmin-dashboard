const saveToLocalStorageMiddleware = store => next => action => {
    let result = next(action);
    if (action.type === 'user/setUser') {
        localStorage.setItem('userData', JSON.stringify(store.getState().user));
    }
    return result;
};

export default saveToLocalStorageMiddleware;
