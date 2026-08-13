import { configureStore } from '@reduxjs/toolkit'
import jobSliceReducer from './jobSlice';
export const store = configureStore({
  reducer: {
    jobs: jobSliceReducer,// Add your reducers here
  },
})


// Автоматически вытаскиваем тип всего стейта из нашего стора
export type RootState = ReturnType<typeof store.getState>;

// И на всякий случай тип для диспатча, пригодится в будущем
export type AppDispatch = typeof store.dispatch;