/* import { Provider, connect } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import axios from 'axios'

export const reducer = ( state=commentsDefaults, actions )=>{
    switch ( actions.type ){
      case 'c/load':   return { ...state, [actions.id]: true };
      case 'c/loaded': return { ...state, [actions.id]: actions.list };
      default: return state
    }
  }
  
export const withComments = connect(
    ({comments})=> ({comments}),
    ( dispatch )=> ({ commentsActions: {
      load:   async (id)=> {
        // if ( store.getState().comments[id] === true ) return;
        dispatch({type:'c/load',id});
        const request = await fetch();
        const response = await request.json();
        dispatch({type:'c/loaded',id,list:response.list});
      },
      loaded: ()=>{},
      add:    async (id,data)=> {
        const request  = await axios.post('/comment/' ,{
          id, data
        })
        dispatch({type:'c/add',id,data})
      },
      del:    ()=>{},
      edit:   ()=>{}
    }})
  );
  
  const commentsDefaults = {
    1: [
      {userName:'anx',text:'blah good stuff'}
    ]
  } */