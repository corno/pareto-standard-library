import * as n_process from "process"

import { A } from "../api.generated"

export const $$: A.createStdErrWriter = () => {
    return {
        'construct': () => {
            return {
                'data': ($) => {
                    n_process.stderr.write($)
                },
                'end': () => { }
            }
        }
    }
}