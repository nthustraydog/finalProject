const initialState = {
    id: '',
    eachdogDisplay: false
};
export function id(state = initialState, action) {
    switch (action.type) {
      case '@ALL/SETID':
          return {
              ...state,
              id: action.ID,
          };
      case '@ALL/SETEACHDISPLAY':
          return {
              ...state,
              eachdogDisplay: action.display,
          };
      default:
          return state;
    }
}
