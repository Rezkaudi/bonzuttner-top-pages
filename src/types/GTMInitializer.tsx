'use client'

import { useEffect } from 'react'
import TagManager from 'react-gtm-module'

export default function GTMInitializer() {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-ID-Here' })
  }, [])

  return null
}