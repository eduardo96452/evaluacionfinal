// src/config/supabase.js
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

// Estas variables deben estar definidas en tu archivo .env
// o configuradas en tu entorno de despliegue
const supabaseUrl = process.env.SUPABASE_URL; 
const supabaseKey = process.env.SUPABASE_KEY; 

// Crea el cliente de Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
