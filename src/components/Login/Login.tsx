import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tooltip, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import Cookies from 'cookies-js';
import "./Login.css";

// Redux Actions
// TODO: add resetUserFields
import { getUser } from './../../store/actions/usersActions';


const validateAndSignInUser = (values: any, dispatch: any) => {
  console.log("validateAndSignInUser", values)
  // return dispatch(signInUser(values))
  //   .then(checkStatus)
  //   .then(parseJSON)
  //   .then((r: any)=>{
  //     Cookies.set('jwtToken', r.token, {path: window.location.path, expire: 6000});
  //     dispatch(signInUserSuccess(r.user));
  //     window.location.hash = 'dashboard';
  //   }).catch((err: any) => {
  //     dispatch(signInUserFailure(err));
  //   });
};
/////////////////////////////////////////////////////////

class Login extends React.Component<{}, any> {
  private toggle: any;
  constructor(props: any) {
    super(props);

    this.state = {
      error: props.error,
      popoverOpen: false
    }
  }

  componentWillReceiveProps(nextProps: any) {
    this.setState({
      error: nextProps.error,
      popoverOpen: !nextProps.error.okay
    });
  }

  handleEnter = (e: any) => {
    if (e.which === 13) {
      this.login(e);
    }
  }

  login = (e: any) => {
    const login = document.getElementById('login')  as Element;
    const pass = document.getElementById('pass') as Element;
    console.log("login", login, pass);
    const body = {
      name: "",
      pass: ""
    };
    window.location.hash = "/bezos/dashboard";
    // validateAndSignInUser(body, this.props.dispatch);
  }

  goRegister = () => {
    window.location.hash = "/bezos/dashboard";
  }

  handleClear = () => {
    if (this.state.popoverOpen) {
      this.setState({
        popoverOpen: !this.state.popoverOpen

      });
      console.log(this.refs.username);
      // this.refs.username.classList.remove('has-danger')
      // this.refs.password.classList.remove('has-danger')
    }
  }

  private forgotPassword = (e: any) => {
    console.log("forgotPassword", e);
  }

  render() {
    let classUser, classPass;
    if (this.state.error && this.state.error.status === 401) {
      classUser = 'input-group mb-3 has-danger';
      classPass = 'input-group mb-4 has-danger';
    } else {
      classUser = 'input-group mb-3';
      classPass = 'input-group mb-4';
    }

    return (
      <div className="app flex-row align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card-group add-padding mb-15">
                <div className="card p-4 ">
                  <div className="card-block">
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <div className={classUser}  ref="username">
                      <span className="input-group-addon"><i className="icon-user"></i></span>
                      <input id="login" type="text" onFocus={this.handleClear} className="form-control" placeholder="Username"/>
                      <Popover placement="left" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                      <PopoverBody>The Username or Password is incorrect. Please try again.</PopoverBody>
                    </Popover>
                    </div>
                    <div style={{position: "relative", top: '-7px'}} id="Popover1"></div>
                    <div className={classPass} ref="password">
                      <span className="input-group-addon"><i className="icon-lock"></i></span>
                      <input id="pass" type="password" onFocus={this.handleClear} onKeyPress={this.handleEnter} className="form-control" placeholder="Password"/>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <button type="button" className="btn btn-primary px-4" onClick={this.login.bind(this)}>Login</button>
                      </div>
                      <div className="col-6 text-right">
                        <button type="button" className="btn btn-link px-0" onClick={this.forgotPassword}>Forgot password?</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-inverse card-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <div className="card-block text-center">
                    <div>
                      <h2>Sign up</h2>
                      <button type="button" onClick={this.goRegister} className="btn btn-bezos active mt-3">Register Now!</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: any, ownProps: any) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, null)(Login);
