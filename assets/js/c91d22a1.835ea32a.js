"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6398],{35579:e=>{e.exports=JSON.parse('{"functions":[],"properties":[{"name":"DragNum","desc":"A field which allows the user to click and drag their cursor to enter a number.\\nYou can ctrl + click to directly input a number, like InputNum.\\nYou can hold Shift to increase speed, and Alt to decrease speed when dragging.\\n\\n```lua\\nhasChildren = false\\nhasState = true\\nArguments = {\\n    Text: string? = \\"DragNum\\",\\n    Increment: number? = nil,\\n    Min: number? = nil,\\n    Max: number? = nil,\\n    Format: string? | { string }? = [DYNAMIC] -- Iris will dynamically generate an approriate format.\\n}\\nEvents = {\\n    numberChanged: () -> boolean,\\n    hovered: () -> boolean\\n}\\nStates = {\\n    number: State<number>?,\\n    editingText: State<boolean>?\\n}\\n```\\n    ","lua_type":"Iris.DragNum","tags":["Widget","HasState"],"source":{"line":967,"path":"lib/API.lua"}},{"name":"DragVector2","desc":"A field which allows the user to click and drag their cursor to enter a Vector2.\\nYou can ctrl + click to directly input a Vector2, like InputVector2.\\nYou can hold Shift to increase speed, and Alt to decrease speed when dragging.\\n\\n```lua\\nhasChildren = false\\nhasState = true\\nArguments = {\\n    Text: string? = \\"DragVector2\\",\\n    Increment: Vector2? = nil,\\n    Min: Vector2? = nil,\\n    Max: Vector2? = nil,\\n    Format: string? | { string }? = [DYNAMIC] -- Iris will dynamically generate an approriate format.\\n}\\nEvents = {\\n    numberChanged: () -> boolean,\\n    hovered: () -> boolean\\n}\\nStates = {\\n    number: State<Vector2>?,\\n    editingText: State<boolean>?\\n}\\n```\\n    ","lua_type":"Iris.DragVector2","tags":["Widget","HasState"],"source":{"line":999,"path":"lib/API.lua"}},{"name":"DragVector3","desc":"A field which allows the user to click and drag their cursor to enter a Vector3.\\nYou can ctrl + click to directly input a Vector3, like InputVector3.\\nYou can hold Shift to increase speed, and Alt to decrease speed when dragging.\\n\\n```lua\\nhasChildren = false\\nhasState = true\\nArguments = {\\n    Text: string? = \\"DragVector3\\",\\n    Increment: Vector3? = nil,\\n    Min: Vector3? = nil,\\n    Max: Vector3? = nil,\\n    Format: string? | { string }? = [DYNAMIC] -- Iris will dynamically generate an approriate format.\\n}\\nEvents = {\\n    numberChanged: () -> boolean,\\n    hovered: () -> boolean\\n}\\nStates = {\\n    number: State<Vector3>?,\\n    editingText: State<boolean>?\\n}\\n```\\n    ","lua_type":"Iris.DragVector3","tags":["Widget","HasState"],"source":{"line":1031,"path":"lib/API.lua"}},{"name":"DragUDim","desc":"A field which allows the user to click and drag their cursor to enter a UDim.\\nYou can ctrl + click to directly input a UDim, like InputUDim.\\nYou can hold Shift to increase speed, and Alt to decrease speed when dragging.\\n\\n```lua\\nhasChildren = false\\nhasState = true\\nArguments = {\\n    Text: string? = \\"DragUDim\\",\\n    Increment: UDim? = nil,\\n    Min: UDim? = nil,\\n    Max: UDim? = nil,\\n    Format: string? | { string }? = [DYNAMIC] -- Iris will dynamically generate an approriate format.\\n}\\nEvents = {\\n    numberChanged: () -> boolean,\\n    hovered: () -> boolean\\n}\\nStates = {\\n    number: State<UDim>?,\\n    editingText: State<boolean>?\\n}\\n```\\n    ","lua_type":"Iris.DragUDim","tags":["Widget","HasState"],"source":{"line":1063,"path":"lib/API.lua"}},{"name":"DragUDim2","desc":"A field which allows the user to click and drag their cursor to enter a UDim2.\\nYou can ctrl + click to directly input a UDim2, like InputUDim2.\\nYou can hold Shift to increase speed, and Alt to decrease speed when dragging.\\n\\n```lua\\nhasChildren = false\\nhasState = true\\nArguments = {\\n    Text: string? = \\"DragUDim2\\",\\n    Increment: UDim2? = nil,\\n    Min: UDim2? = nil,\\n    Max: UDim2? = nil,\\n    Format: string? | { string }? = [DYNAMIC] -- Iris will dynamically generate an approriate format.\\n}\\nEvents = {\\n    numberChanged: () -> boolean,\\n    hovered: () -> boolean\\n}\\nStates = {\\n    number: State<UDim2>?,\\n    editingText: State<boolean>?\\n}\\n```\\n    ","lua_type":"Iris.DragUDim2","tags":["Widget","HasState"],"source":{"line":1095,"path":"lib/API.lua"}},{"name":"DragRect","desc":"A field which allows the user to click and drag their cursor to enter a Rect.\\nYou can ctrl + click to directly input a Rect, like InputRect.\\nYou can hold Shift to increase speed, and Alt to decrease speed when dragging.\\n\\n```lua\\nhasChildren = false\\nhasState = true\\nArguments = {\\n    Text: string? = \\"DragRect\\",\\n    Increment: Rect? = nil,\\n    Min: Rect? = nil,\\n    Max: Rect? = nil,\\n    Format: string? | { string }? = [DYNAMIC] -- Iris will dynamically generate an approriate format.\\n}\\nEvents = {\\n    numberChanged: () -> boolean,\\n    hovered: () -> boolean\\n}\\nStates = {\\n    number: State<Rect>?,\\n    editingText: State<boolean>?\\n}\\n```\\n    ","lua_type":"Iris.DragRect","tags":["Widget","HasState"],"source":{"line":1127,"path":"lib/API.lua"}}],"types":[],"name":"Drag","desc":"Drag Widget API\\n\\nA draggable widget for each datatype. Allows direct typing input but also dragging values by clicking and holding.\\n\\nSee [Input] for more details on the arguments.\\n    ","source":{"line":936,"path":"lib/API.lua"}}')}}]);