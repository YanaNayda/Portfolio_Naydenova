import {createClient} from '@supabase/supabase-js'

const supabaseUrl ="https://vnhyaaezozinlaabnbqv.supabase.co"
const supabaseKey ='yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZuaHlhYWV6b3ppbmxhYWJuYnF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwMDYzNTksImV4cCI6MjA3NDU4MjM1OX0.p_BTuJEcxhhBz3oLAsGdFccwJXF5kURwrJ2OYKjTusY'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase