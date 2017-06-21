const initialState = {
    data: '',
    goCamera: false
};

export function qrcode(state = initialState, action) {
    switch (action.type) {
      case '@QRCODE/TRANSFER':
        return {
          ...state,
          data: action.data
        };
      case '@QRCODE/GOTOCAMERA':
        return {
          ...state,
          goCamera: true
        }
      case '@QRCODE/GOBACKACCOM':
        return {
          ...state,
          goCamera: false
        }
      default:
        return state;
    }
}
