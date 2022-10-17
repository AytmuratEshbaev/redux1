import {createStore} from 'redux';

interface IState {
    status: string
}

const initalState: IState = { status: 'In Between' };

const reducer = function (state = initalState, action: any) {
    switch (action.type) {
        case "LIQUID":
            return {
                status: 'Watery'
            }
        case "GAS":
            return {
                status: 'Like vapor'
            }
        case "SOLID":
            return {
                status: 'Ice ice'
            }
    }
    return state;
}

const store = createStore(reducer);

export default store;