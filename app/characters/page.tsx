'use server'

import { permanentRedirect } from 'next/navigation'


const NoPageHere = () => {
  permanentRedirect('/')
}

export default NoPageHere