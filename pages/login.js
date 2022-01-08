import React from 'react'
import styles from './login.module.css'

const login = () => {
    return (
        <main className="flex flex-col items-center h-screen max-h-full ">
            <h1 className="font-caveat mt-24 text-5xl md:text-8xl lg:text-9xl  font-bold ">Favorite Cocktails</h1>
            <p className="mt-5 md:text-xl lg:text-3xl" >Search and save your favorite cocktails.</p>
            <img src="/images/cocktail1.png" alt="martini" className={styles.martini} />
            <button
                className="mt-20 lg:mt-10 border p-3 rounded w-64 md:w-80 lg:w-96 bg-[#D6DFE0] md:text-lg lg:text-xl"
            >
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBRF__vDRer9N3lzmW-FJTnaiCi1Vd7TvcHrdcjzU28RHD2kcpRVdZIQhLvZaksbBPpak&usqp=CAU"
                    alt="google"
                    className="inline h-4 w-4 md:h-5 md:w-5 mb-0.5 lg:h-6 lg:w-6 mr-1.5 md:mr-2 lg:mr-3"
                />
          Log in with Google
        </button>
        </main>
    )
}

export default login
