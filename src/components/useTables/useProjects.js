import { supabase } from './supabaseClient'
import { useEffect, useState } from 'react'

function useProjects() {
  const [documents, setDocuments] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
      if (error) console.error(error)
      else setDocuments(data)
    }
    fetchData()
  }, [])

  return documents
}
