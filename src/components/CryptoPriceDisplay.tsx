import { useMemo } from "react"
import { useCryptoStore } from "../store"
import Spinner from "./Spinner.tsx"


const CryptoPriceDisplay = () => {

    const result = useCryptoStore((state) => state.result)
    const loading = useCryptoStore((state) => state.loading)
    const hasResult = useMemo(() => !Object.values(result).includes(''), [result])

    return (
        <div className="result-wrapper">

            {loading ? <Spinner/> : hasResult && (
                <>
                    <h2>Cotización</h2>
                    <div className="result">

                        <img 
                        src={`https://cryptocompare.com/${result.IMAGEURL}`} 
                        alt="Imagen Criptomoneda" />

                        <div>
                            <p>el precio es de: <span>{result.PRICE}</span></p>
                            <p>precio mas alto del dia: <span>{result.HIGHDAY}</span></p>
                            <p>precio mas bajo del dia: <span>{result.LOWDAY}</span></p>
                            <p>variación ultimas 24hs: <span>{result.CHANGEPCT24HOUR}%</span></p>
                            <p>Ultima Actualización: <span>{result.LASTUPDATE}</span></p>
                        </div>
                    </div>
                </>
            )}

        </div>
    )
}

export default CryptoPriceDisplay
