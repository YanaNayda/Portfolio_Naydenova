import { supabase } from './supabaseClient'
import { useEffect, useState } from 'react'

function useOther() {
  const [documents, setDocuments] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from('otherExperience')
        .select('*')
      if (error) console.error(error)
      else setDocuments(data)
    }
    fetchData()
  }, [])

  return documents
}
