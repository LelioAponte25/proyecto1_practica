import { useState } from "react"
import axios from 'axios'

const useFetch = (url) => {
        const [infoApi, setInfoApi] = useState()
        const [hasError, setHasError] = useState()
        const [isloading, setIsloading] = useState()

        const getApi = () => {
            setIsloading(true)
            axios.get(url)
            .then(res => {
                setInfoApi(res.data)
                setHasError(false)
            })
            .catch(err => {
                console.log(err)
                setHasError(true)
            })

            .finally(() => setIsloading(false))
        }

        return [infoApi, getApi, hasError, isloading ]
}

export default useFetch