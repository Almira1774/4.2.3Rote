import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({command})=>{
return{
plugins: [react()],


// Если мы собираем проект на продакшн (build) — подставляем имя репозитория.
    // Если запускаем локально на компьютере (serve) — базовый путь будет строго корневым '/'.
base: command==='build'? '/4.2.3Rote/' : '', 
  
}
  
})
