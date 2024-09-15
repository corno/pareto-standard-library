import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace D {
    
    
    
    
    
}

export namespace A {
    
    export type getElementAt = () => g_this.SYNC.A.F.GetElementAt
    
    export type getLastElement = () => g_this.SYNC.A.F.GetLastElement
    
    export type getLength = () => g_this.SYNC.A.F.GetLength
    
    export type merge = () => g_this.SYNC.A.F.Merge
    
    export type push = () => g_this.SYNC.A.F.Push
}

export type API = {
    readonly 'getElementAt': A.getElementAt
    readonly 'getLastElement': A.getLastElement
    readonly 'getLength': A.getLength
    readonly 'merge': A.merge
    readonly 'push': A.push
}