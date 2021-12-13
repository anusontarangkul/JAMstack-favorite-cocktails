import React from 'react'
import styles from './login.module.css'

const login = () => {
    return (
        <main className="flex flex-col items-center h-screen max-h-full ">
            <h1 className="font-caveat mt-24 text-5xl font-bold ">Favorite Cocktails</h1>
            <p className="mt-5">Search and save your favorite cocktails.</p>
            <img src="/images/cocktail1.png" alt="martini" className={styles.martini} />
            <button
                className="mt-20 border p-3 rounded w-64 bg-[#D6DFE0]"
            >
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBRF__vDRer9N3lzmW-FJTnaiCi1Vd7TvcHrdcjzU28RHD2kcpRVdZIQhLvZaksbBPpak&usqp=CAU"
                    alt="google"
                    className="inline h-4 mb-0.5 mr-1.5"
                />
          Log in with Google
        </button>
        </main>
    )
}

export default login
