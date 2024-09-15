import * as pi from 'pareto-core-internals'

import * as g_this from "../glossary"

import { A } from "../api.generated"

export const $$: A.push = () => {
    return <T>($: g_this.T.PushParameters<T>) => {
        const temp: T[] = []
        $.array.__forEach(($) => {
            temp.push($)
        })
        temp.push($.element)
        return pi.wrapRawArray(temp)
    }
}