import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"

export namespace ASYNC {
    
    export namespace I {
        
        export type Log = {
            'data': ($: g_common.T.String, ) => void
            'end': () => void
        }
        
        export type Main = ($: T.MainData, ) => void
        
        export type Signal = {
            'data': () => void
            'end': () => void
        }
    }
    
    export namespace A {
        
        
        export namespace C {
            export type CreateMain = {
                'construct': () => ASYNC.I.Main
            }
        }
        
        
        export namespace C {
            export type CreateSignaler = {
                'construct': () => ASYNC.I.Signal
            }
        }
        
        
        export namespace C {
            export type CreateStringLogger = {
                'construct': () => ASYNC.I.Log
            }
        }
    }
}

export namespace SYNC {}