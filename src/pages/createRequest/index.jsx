import React ,{useEffect} from 'react'
import Main from '@/components/stepperComponents/main'
import {useResetRequestFormState} from '@/store/requestManagement/requestForm'

export default function Requestform() {



useEffect(()=>{
  useResetRequestFormState()
},[])


  return (
    <>

    <Main />
    
    </>
  )
}
