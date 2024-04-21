import { FormEvent } from 'react';
import styles from './Search.module.scss';
import SearchIcon from '../../assets/SearchIcon';
import { Button } from '../Button/Button';

interface SearchProps {
   onSubmit: (text: string) => void,
   hasError: boolean
}

type FormFields = {
   username: HTMLInputElement
}

export const Search = ({ onSubmit, hasError }: SearchProps) => {


   const handleSubmit = (e: FormEvent<HTMLFormElement & FormFields>) => {
      e.preventDefault()

      const text = e.currentTarget.username.value

      if (text.trim()) {
         onSubmit(text)

         e.currentTarget.reset()
      }
   }

   return (
      <form onSubmit={handleSubmit} autoComplete='off' >
         <div className={styles.search}>
            <label htmlFor="search" className={styles.label} >
               <SearchIcon />
            </label>
            <input
               className={styles.textField}
               type="text"
               id='search'
               name='username'
               placeholder='Search GitHub username...' />
            {hasError && (
               <div className={styles.error}>
                  No reasult
               </div>
            )}
            <Button>Search</Button>
         </div>
      </form>
   )
}
