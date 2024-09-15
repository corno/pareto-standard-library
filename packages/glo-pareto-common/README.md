
this package provides several common [Pareto](https://github.com/corno/pareto-documentation) types.

most importantly, it contains first class citizen types for the value types available in Pareto (Pareto's value types cannot directly be referenced):
- Array
- Boolean
- Computed
- Dictionary
- Null
- Number
- Optional
- String

there is a 'Path' type (an array of strings), representing a file path

lastly there are multiple annotated types. Annotated types are useful for storing annotations with the values, for example source information
- AnnotatedDictionary
- AnnotatedKey
- AnnotatedReference
- AnnotatedKeyReferencePair

it also provides the following asynchronous interfaces:
- Null
- Number
- NumberStream
- String
- StringStream

and these synchronous interfaces:
- Null
- Number
- String
