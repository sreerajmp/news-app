import React from 'react';
// import { message } from 'antd';


export default class UserService extends React.Component {
   
    authenticate(data) {
        return new Promise((resolve, reject) => {
           resolve( data.email===localStorage.getItem('email')&& (data.password===localStorage.getItem('password'))?data:"")
           
            
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
   

}
