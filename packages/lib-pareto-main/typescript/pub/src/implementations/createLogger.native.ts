import { A } from "../api.generated"

export const $$: A.createLogger = () => {
    return {
        'construct': () => {
            return {
                'data': ($) => {
                    console.log($)
                },
                'end': () => { }
            }
        }
    }
}