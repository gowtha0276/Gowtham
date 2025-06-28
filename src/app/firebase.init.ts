import { initializeApp, getApps } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { environment } from '../environments/environment';

const firebaseApp = getApps().length === 0
  ? initializeApp(environment.firebaseConfig)
  : getApps()[0];

export const storage = getStorage(firebaseApp);