import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace A {
        
        
        export namespace F {
            export type GetElementAt = <TType>($: T.GetElementAtData<TType>) => TType
        }
        
        
        export namespace F {
            export type GetLastElement = <TType>($: T.Array<TType>) => T.OptionalElement<TType>
        }
        
        
        export namespace F {
            export type GetLength = <TType>($: T.Array<TType>) => g_common.T.Number
        }
        
        
        export namespace F {
            export type Merge = <TType>($: T.ArrayOfArrays<TType>) => T.Array<TType>
        }
        
        
        export namespace F {
            export type Push = <TType>($: T.PushParameters<TType>) => T.Array<TType>
        }
    }
}