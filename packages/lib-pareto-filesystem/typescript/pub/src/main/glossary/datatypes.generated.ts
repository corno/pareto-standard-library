import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_fs from "res-pareto-filesystem"

export namespace N {}

export namespace T {
    
    export namespace ReadOptionalDirectoryData {
        
        export namespace allow {
            
            export type isNotADirectory = boolean
            
            export type noEntity = boolean
        }
        
        export type allow = {
            readonly 'isNotADirectory': boolean
            readonly 'noEntity': boolean
        }
        
        export type fs = g_fs.T.ReadDirectory_$Data
    }
    
    export type ReadOptionalDirectoryData = {
        readonly 'allow': {
            readonly 'isNotADirectory': boolean
            readonly 'noEntity': boolean
        }
        readonly 'fs': g_fs.T.ReadDirectory_$Data
    }
    
    export namespace ReadOptionalDirectoryResult {
        
        export type O = g_fs.T.ReadDirectory_$Success
    }
    
    export type ReadOptionalDirectoryResult = [ false ] | [ true, g_fs.T.ReadDirectory_$Success]
    
    export namespace WriteFileData {
        
        export type data = string
        
        export type settings = g_fs.T.WriteFileParameters
    }
    
    export type WriteFileData = {
        readonly 'data': string
        readonly 'settings': g_fs.T.WriteFileParameters
    }
}