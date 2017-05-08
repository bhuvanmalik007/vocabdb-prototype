// import React from 'react'
// import {ToastMessage,ToastContainer} from 'react-toastr';
// let ToastMessageFactory = React.createFactory(ToastMessage.animation);
// import { connect } from 'react-redux';
// import ReduxToastr from 'react-redux-toastr';
//
// class Toastr extends React.Component {
// constructor(props){
//   super(props);
//   this.addAlert = this.addAlert.bind(this);
// }
//   addAlert(){
//       this.refs.container.success(
//         <strong>Right click any gif -> Save Image As..</strong>,
//         "TO DOWNLOAD : ", {
//         timeOut: 2000,
//         extendedTimeOut: 10000,
//         preventDuplicates:true,
//         closeButton:true
//       });
//     }
//
//   render() {
//     this.props.toastr.message && this.addAlert();
//     return (
//       <div>
//         {/* <ToastContainer ref="container"
//           toastMessageFactory={ToastMessageFactory}
//         className="toast-top-right" /> */}
//         <ReduxToastr
//           timeOut={4000}
//           newestOnTop={false}
//           preventDuplicates
//           position="top-left"
//           transitionIn="fadeIn"
//           transitionOut="fadeOut"
//           progressBar/>
//       </div>
//     );
//   }
// }
//
// // function mapStateToProps(state) {
// //   return {
// //     // toastr: state.toastrState
// //     };
// // }
//
// // function mapDispatchToProps(dispatch) {
// //   return {
// //     deleteWord: (id) => actions.deleteWord(id)(dispatch),
// //     filterWords: bindActionCreators(actions.filterWords, dispatch)
// //   };
// // }
//
// export default connect(
// )(Toastr);
