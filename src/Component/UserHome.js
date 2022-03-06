
import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {db} from './Firebase/firebase_config'
import { collection, onSnapshot, doc} from 'firebase/firestore'
export const UserHome = props =>{
    const colRef = collection(db, 'users')


    const getUserData  = () =>{
        onSnapshot(colRef, (snapshot)=>{
            let user = []
            snapshot.docs.forEach((info)=>{
                user.push({...doc.data(),  id: doc.id})
            })
            console.log(user);
        })
    }
    useEffect(()=>{
        getUserData();
    })


    return(
        <>
            <div>
                <h1> HELLO WORLD</h1>
            </div>
            
        </>
    )





}