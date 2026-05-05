import { useEffect, useState } from "react"

export default function useCachedFetchData(key, url, options = {}) {
    const [data, setData] = useState(null)
    const [pending, setPending] = useState(false)
    const [error, setError] = useState()

    useEffect(() => {
        async function fetchData() {
            setPending(true)
            if (key) {
                let cachedData = sessionStorage.getItem(key)
                let cacheExpires = sessionStorage.getItem(key + "_expires")


                //null === false
                if (cachedData && cacheExpires && Date.now() < parseInt(cacheExpires)) {
                    console.log("det var data fra cache")
                    setData(JSON.parse(cachedData))
                    setLoading(false)

                    return;

                }
            }



            try {

                const respons = await fetch(url)
                if (!respons.ok) {
                    setData(null)
                    throw new Error(`Error ${respons.status}`)
                    console.log(respons);
                }





                const json = await respons.json()

                if (key) {
                    sessionStorage.setItem(key, JSON.stringify(json))
                    sessionStorage.setItem(key + "_expires", Date.now() + 1000 * 60 * 60)
                }

                setPending(false)
                setData(json)
                setError(null)
            }


            catch (error) {
                setPending(false)
                setError(error.message)

            }



        }

        fetchData()
    }, [url])

    return { data, pending, error }
}