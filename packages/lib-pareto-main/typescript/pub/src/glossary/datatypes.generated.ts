import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"

export namespace N {}

export namespace T {
    
    export namespace Arguments {
        
        export type A = string
    }
    
    export type Arguments = pt.Array<string>
    
    export namespace MainData {
        
        export type _larguments = T.Arguments
    }
    
    export type MainData = {
        readonly 'arguments': T.Arguments
    }
}