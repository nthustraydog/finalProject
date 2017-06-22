import {getDog as getDogFromApi} from '../api/dog';

export function startLoading() {
    return {
        type: '@EACH/STARTLOAD',
    };
}
export function endLoading() {
    return {
        type: '@EACH/ENDLOAD',
    };
}
export function endGetDog(dog) {
    return {
        type: '@EACH/ENDGETDOG',
        dog
    };
}

export function getDog(dogID, loading = false) {
    return (dispatch, getState) => {
        if(!loading)
           dispatch(startLoading());

        return getDogFromApi(dogID).then(dog => {
            dispatch(endGetDog(dog[0]));
            setTimeout(() => {
                dispatch(endLoading());
            }, 1000);
        }).catch(err => {
            console.error('Error get dog information', err);
            dispatch(endLoading());
        });
    };
}

export function getAccomplish(loading) {
    return (dispatch, getState) => {
        if(!loading)
          dispatch(startLoading());

          setTimeout(() => {
              dispatch(endLoading());
          }, 1000);
    };
}
export function enterHome(loading) {
    return (dispatch, getState) => {
        if(!loading)
          dispatch(startLoading());

          setTimeout(() => {
              dispatch(endLoading());
          }, 1000);
    };
}
