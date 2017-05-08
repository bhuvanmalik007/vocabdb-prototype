import { bindActionCreators } from 'redux';
import { actions as toastrActions } from 'react-redux-toastr';

export default (dispatch, {message,type,title})=>{
  bindActionCreators(toastrActions, dispatch).add({
    type,
    title,
    position: 'top-center', // This will override the global props position.
    attention: true, // This will add a shadow like the confirm method.
    message,
    options: {},
    progressBar: false,
    showCloseButton: true
  });
};
