import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_this from "./glossary"

export namespace D {
    
    
    
    
    
}

export namespace A {
    
    export type createErrorLogger = () => g_this.ASYNC.A.C.CreateStringLogger
    
    export type createLogger = () => g_this.ASYNC.A.C.CreateStringLogger
    
    export type createStdErrWriter = () => g_this.ASYNC.A.C.CreateStringLogger
    
    export type createStdOutWriter = () => g_this.ASYNC.A.C.CreateStringLogger
    
    export type setExitCodeToFailed = () => g_this.ASYNC.A.C.CreateSignaler
}

export type API = {
    readonly 'createErrorLogger': A.createErrorLogger
    readonly 'createLogger': A.createLogger
    readonly 'createStdErrWriter': A.createStdErrWriter
    readonly 'createStdOutWriter': A.createStdOutWriter
    readonly 'setExitCodeToFailed': A.setExitCodeToFailed
}