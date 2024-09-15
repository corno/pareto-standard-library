import * as n_process from "process"

import { A } from "../api.generated"

export const $$: A.createStdOutWriter = () => {
    return {
        'construct': () => {
            return {
                'data': ($) => {
                    n_process.stdout.write($)
                },
                'end': () => { }
            }
        }
    }
}