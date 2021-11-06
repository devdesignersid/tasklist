import { AppStateContext } from '@/context';
import { useContext } from 'react';

const useAppState = () => useContext(AppStateContext);

export default useAppState;
