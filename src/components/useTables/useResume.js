import { supabase } from './supabaseClient'
import { useEffect, useState } from 'react'

function useResume() {
  const [documents, setDocuments] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from('resume')
        .select('*')
      if (error) console.error(error)
      else setDocuments(data)
    }
    fetchData()
  }, [])

  return documents
}
