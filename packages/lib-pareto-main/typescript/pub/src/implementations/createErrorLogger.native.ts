import { A } from "../api.generated"

export const $$: A.createErrorLogger = () => {
    return {
        'construct': () => {
            return {
                'data': ($) => {
                    console.error($)
                },
                'end': () => { }
            }
        }
    }
}