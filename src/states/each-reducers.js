const initialState = {
    loading: false,
    dogInfo: null
};

export function eachdog(state = initialState, action) {
    switch (action.type) {
      case '@EACH/STARTLOAD':
          return {
              ...state,
              loading: true,
          };
      case '@EACH/ENDLOAD':
          return {
              ...state,
              loading: false,
          };
      case '@EACH/ENDGETDOG':
          
          return {
              ...state,
              dogInfo: action.dog
          };
      default:
          return state;
    }
}
