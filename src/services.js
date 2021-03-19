import React from "react";
import axios from "axios"
import { NEWS_API_KEY } from "./config";
export default class services extends React.Component{
    constructor(props){
        super(props);
        this.state={
            type:'',
            articles:[]
        };
    }
    getNews=(newsType,offset) => {
        console.log("typee:",newsType);  
        return new Promise((resolve, reject) => { 

            axios.get(
                `https://api.nytimes.com/svc/news/v3/content/all/${newsType}.json?offset=${offset}&api-key=${NEWS_API_KEY}`
              ).then(res=>{
                  if (res.status===200)
                  {
                  console.log("res",res);
                   resolve(res.data) }
                }).catch(err=>{
                    console.log("err:",err);
                })
            
            });      
           
        }

        getNewsSection=() => {  
            return new Promise((resolve, reject) => { 
    
                axios.get(
                    `https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${NEWS_API_KEY}`
                  ).then(res=>{
                      if (res.status===200)
                      {
                      console.log("resSec",res);
                       resolve(res.data) }
                    }).catch(err=>{
                        console.log("err:",err);
                    })
                
                });      
               
            }
      
    }