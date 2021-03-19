import React from 'react';
// import { message } from 'antd';


export default class UserService extends React.Component {
    COGNITO_POOL;
    USER_POOL;
    env;
    userId;
    provideuserId;
    providerUserId;
    apiKey;
    accessToken;
    accessData;
    CognitoUserPool;
    constructor(props) {
        super(props);
        // this.USER_POOL = new AWSCognito.CognitoUserPool(this.env.COGNITO_POOL);
        // let poolData = this.env.COGNITO_POOL;
    }

    // getLoginStatus() {

    //     return new Promise((resolve, reject) => {
    //         // var userPool = new AWSCognito.CognitoUserPool(this.env.COGNITO_POOL);
    //         var cognitoUser = userPool.getCurrentUser();
    //         if (cognitoUser != null) {
    //             cognitoUser.getSession(function (err, session) {
    //                 if (err) {
    //                     reject(err);
    //                 }
    //                 else {
    //                     // console.log('yeah ',session)
    //                     localStorage.setItem('phoneNumberVerified', session.idToken.payload.phone_number_verified)
    //                     resolve(session);
    //                 }

    //             });
    //         }
    //         else {
    //             reject(new Error("Session not found"));
    //         }


    //     });
    // }
    authenticate(data) {
        return new Promise((resolve, reject) => {
           resolve( data.email===localStorage.getItem('email')&& (data.password===localStorage.getItem('password'))?data:"")
           
           reject()
           {
            localStorage.setItem('logged', false)
           }
            
        })

            
    }
    register(data) {
        return new Promise((resolve, reject) => { 
            console.log("data::",data);
        localStorage.setItem('email', data.email);
        localStorage.setItem('user', data.userName);
        localStorage.setItem('password', data.password);
        resolve (data)
        })
        
    }
    // forgetPassword(phoneno) {

    //     return new Promise((resolved, reject) => {
    //         superagent
    //             .post(this.env.API_URL + '/api/v1/registration/forgetpassword')
    //             .set('Authorization', this.apiKey)
    //             .set('Accept', 'application/json')
    //             .send({ phoneno: phoneno }) // sends a JSON post body
    //             .end((err, res) => {
    //                 if (!err) {
    //                     resolved(res)
    //                 }
    //                 else {
    //                     reject(err)
    //                 }
    //                 // Calling the end function will send the request
    //             });

    //     });
    // }
    // resetPassword(data, phoneno) {

    //     return new Promise((resolved, reject) => {
    //         superagent
    //             .post(this.env.API_URL + '/api/v1/registration/resetpassword')
    //             .set('Authorization', this.apiKey)
    //             .set('Accept', 'application/json')
    //             .send({ phoneno: phoneno, otp: data.otp, newPassword: data.password }) // sends a JSON post body
    //             .end((err, res) => {
    //                 if (!err) {
    //                     resolved(res)
    //                 }
    //                 else {
    //                     reject(err)
    //                 }

    //             });

    //     });
    // }
    // confirmPassword(data) {
    //     var _this = this;
    //     var phone = '+91'.concat(data.phoneno)
    //     // var cognitoUser = new AWSCognito.CognitoUser({
    //     //     Username: phone,
    //     //     Pool: this.USER_POOL
    //     // });
    //     return new Promise((resolve, reject) => {
    //         cognitoUser.confirmPassword(data.otp, data.password, {
    //             onFailure(err) {
    //                 // reject(err);

    //                 resolve(err)
    //             },
    //             onSuccess() {
    //                 superagent
    //                     .post(_this.env.API_URL + '/api/v1/cognito/updatePasswordOnReset')
    //                     .set('Authorization', _this.apiKey)
    //                     .set('Accept', 'application/json')
    //                     .send({
    //                         newPassword: data.password,
    //                         phone: phone
    //                     })
    //                     .end((err, res) => {
    //                         if (!err) {
    //                             // console.log('res -> ',res);
    //                             resolve('success');
    //                         }
    //                         else {
    //                             reject(err)
    //                         }
    //                         // Calling the end function will send the request
    //                     });

    //             },
    //         });
    //     });
    // }
    // credentials() {
    //     // var userPool = new AWSCognito.CognitoUserPool(this.env.COGNITO_POOL);
    //     var cognitoUser = userPool.getCurrentUser();
    //     return new Promise((resolve, reject) => {
    //         if (cognitoUser != null) {

    //             cognitoUser.getSession(function (err, result) {
    //                 if (result) {
    //                     console.log(result, 'You are now logged in.');

    //                     // Add the User's Id Token to the Cognito credentials login map.
    //                     resolve(AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    //                         IdentityPoolId: 'ap-south-1:0cba9c73-f00b-4459-9f05-13d8e0b5751a',
    //                         Logins: {
    //                             'cognito-idp.ap-south-1.amazonaws.com/ap-south-1:0cba9c73-f00b-4459-9f05-13d8e0b5751a': result.getIdToken().getJwtToken()
    //                         }
    //                     }));
    //                 }
    //             });

    //         }
    //     })
        
    // }

   
    // createInstructor(data) {
    //     return new Promise((resolved, reject) => {
    //         superagent
    //             .post(this.env.baseURL + '/api/v1/instructor_profile/afterLogin/')
    //             // .set('Authorization', _this.apiKey)
    //             .set('Accept', 'application/json')
    //             .send({
    //                 userId: data
    //             })
    //             .end((err, res) => {
    //                 if (!err) {
    //                     resolved(res)
    //                 }
    //                 else {
    //                     reject(err)
    //                 }
    //                 // Calling the end function will send the request
    //             });

    //     });
    // }

    // hostCheck(data) {
    //     return new Promise((resolved, reject) => {
    //         superagent
    //             .post(this.env.API_URL + '/api/v1/hosts/isHost')
    //             // .set('Authorization', _this.apiKey)
    //             .set('Accept', 'application/json')
    //             .send({
    //                 userId: data
    //             })
    //             .end((err, res) => {
    //                 if (!err) {
    //                     resolved(res.body)
    //                 }
    //                 else {
    //                     reject(err)
    //                 }
    //                 // Calling the end function will send the request
    //             });

    //     });
    // }

    // adminLogin(data) {
    //     return new Promise((resolved, reject) => {
    //         superagent
    //             .post(this.env.baseURL + '/api/v1/admin/login')
    //             // .set('Authorization', _this.apiKey)
    //             .set('Accept', 'application/json')
    //             .send({
    //                 username: data.phoneno,
    //                 password: data.password
    //             })
    //             .end((err, res) => {
    //                 if (res && res.body && res.body.isActive) {
    //                     localStorage.clear();
    //                     localStorage.setItem("isAdmin", true);
    //                     resolved(res.body)
    //                 }
    //                 else {
    //                     localStorage.clear();
    //                     reject(err)
    //                 }
    //                 // Calling the end function will send the request
    //             });

    //     });
    // }

}
