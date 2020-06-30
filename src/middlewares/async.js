export default ({ dispatch }) => (next) => (action) => {
    // check to see if the action has a promise on its payload property
    // if it does, hen wait for it resolve
    // if it odesent't, then send the action on to the next middleware
    if (!action.payload || !action.payload.then) {
        return next(action);
    }

    // we want to wait for the promise to resolve
    // and then create new action with that data and dispatch it
    action.payload.then((response) => {
        const newAction = { ...action, payload: response };
        dispatch(newAction);
    });
};


// export default function ({ dispatch }) {
//     return function (next) {
//         return function (action) {

//         }
//     }
// }