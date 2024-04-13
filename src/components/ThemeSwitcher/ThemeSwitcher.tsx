import { useEffect, useState } from 'react';

import styles from './ThemeSwitcher.module.scss';
import SunIcon from '../../assets/SunIcon';
import MoonIcon from '../../assets/MoonIcon';


export const ThemeSwitcher = () => {

   const [isDark, setIsDark] = useState(false)

   const themeText = isDark ? 'Light' : 'Dark'
   const themeIcon = isDark ? <SunIcon /> : <MoonIcon />

   useEffect(() => {
      document.body.setAttribute('data-theme', isDark ? 'dark' : 'light')
   }, [isDark])

   return (
      <div className={styles.switcher} onClick={() => setIsDark(!isDark)}>
         <span>{themeText}</span>
         <div className={styles.icon} >
            {themeIcon}
         </div>
      </div>
   )
}
