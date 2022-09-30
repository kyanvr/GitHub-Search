import { useEffect, useState } from "react"
import LoadingIndicator from "../../Design/LoadingIndicator/LoadingIndicator";

// Credits Thibault Feraux

const Loader = () => {

const [isVisible, setIsVisible] = useState(false);

useEffect(() => {

let mounted = true;

setTimeout(() => {

mounted && setIsVisible(true)

}, 500)

return () => {
    mounted = false
    clearTimeout()
};

}, [])

return isVisible ? <LoadingIndicator/> : null

}

export default Loader;