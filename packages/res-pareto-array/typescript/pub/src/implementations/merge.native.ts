import * as pi from 'pareto-core-internals'

import * as g_this from "../glossary"

import { A } from "../api.generated"

export const $$: A.merge = () => {
    return <T>($: g_this.T.ArrayOfArrays<T>) => {
        const temp: T[] = []
        $.__forEach(($) => {
            $.__forEach(($) => {
                temp.push($)
            })
        })
        return pi.wrapRawArray(temp)
    }
}