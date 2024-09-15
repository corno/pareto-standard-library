import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"

export namespace N {}

export namespace T {
    
    export namespace Array {
        
        export type A<TType> = TType
    }
    
    export type Array<TType> = pt.Array<TType>
    
    export namespace ArrayOfArrays {
        
        export type A<TType> = T.Array<TType>
    }
    
    export type ArrayOfArrays<TType> = pt.Array<T.Array<TType>>
    
    export namespace GetElementAtData {
        
        export type array<TType> = T.Array<TType>
        
        export type index<TType> = number
    }
    
    export type GetElementAtData<TType> = {
        readonly 'array': T.Array<TType>
        readonly 'index': number
    }
    
    export namespace OptionalElement {
        
        export type O<TType> = TType
    }
    
    export type OptionalElement<TType> = [ false ] | [ true, TType]
    
    export namespace PushParameters {
        
        export type array<TType> = T.Array<TType>
        
        export type element<TType> = TType
    }
    
    export type PushParameters<TType> = {
        readonly 'array': T.Array<TType>
        readonly 'element': TType
    }
}