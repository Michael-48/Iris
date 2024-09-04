"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5673],{46972:e=>{e.exports=JSON.parse('{"functions":[{"name":"SetFocusedWindow","desc":"Sets the focused window to the window provided, which brings it to the front and makes it active.\\n    ","params":[{"name":"window","desc":"the window to focus.","lua_type":"Types.Window"}],"returns":[],"function_type":"static","source":{"line":91,"path":"lib/API.lua"}},{"name":"Init","desc":"Initializes Iris and begins rendering. Can only be called once.\\nSee [Iris.Shutdown] to stop Iris, or [Iris.Disabled] to temporarily disable Iris.\\n\\nOnce initialized, [Iris:Connect] can be used to create a widget.\\n\\nIf the `eventConnection` is `false` then Iris will not create a cycle loop and the user will need to call [Internal._cycle] every frame.","params":[{"name":"parentInstance","desc":"where Iris will place widgets UIs under, defaulting to [PlayerGui]","lua_type":"Instance?"},{"name":"eventConnection","desc":"the event to determine an Iris cycle, defaulting to [Heartbeat]","lua_type":"(RBXScriptSignal | () -> () | false)?"}],"returns":[{"desc":"","lua_type":"Iris"}],"function_type":"static","source":{"line":72,"path":"lib/init.lua"}},{"name":"Shutdown","desc":"Shuts Iris down. This can only be called once, and Iris cannot be started once shut down.","params":[],"returns":[],"function_type":"static","source":{"line":117,"path":"lib/init.lua"}},{"name":"Connect","desc":"Connects a function which will execute every Iris cycle. [Iris.Init] must be called before connecting.\\n\\nA cycle is determined by the `eventConnection` passed to [Iris.Init] (default to [RunService.Heartbeat]).\\n\\nMultiple callbacks can be added to Iris from many different scripts or modules.","params":[{"name":"callback","desc":"the callback containg the Iris code","lua_type":"() -> ()"}],"returns":[{"desc":"call to disconnect it","lua_type":"() -> ()"}],"function_type":"method","source":{"line":154,"path":"lib/init.lua"}},{"name":"Append","desc":"Inserts any Roblox [Instance] into Iris.\\n\\nThe parent of the inserted instance can either be determined by the `_config.Parent`\\nproperty or by the current parent widget from the stack.","params":[{"name":"userInstance","desc":"the Roblox [Instance] to insert into Iris","lua_type":"GuiObject"}],"returns":[],"function_type":"static","source":{"line":175,"path":"lib/init.lua"}},{"name":"End","desc":"Marks the end of any widgets which contain children. For example:\\n```lua\\n-- Widgets placed here **will not** be inside the tree\\nIris.Text({\\"Above and outside the tree\\"})\\n\\n-- A Tree widget can contain children.\\n-- We must therefore remember to call `Iris.End()` \\nIris.Tree({\\"My First Tree\\"})\\n    -- Widgets placed here **will** be inside the tree\\n    Iris.Text({\\"Tree item 1\\"})\\n    Iris.Text({\\"Tree item 2\\"})\\nIris.End()\\n\\n-- Widgets placed here **will not** be inside the tree\\nIris.Text({\\"Below and outside the tree\\"})\\n```\\n:::caution Caution: Error\\nSeeing the error `Callback has too few calls to Iris.End()` or `Callback has too many calls to Iris.End()`?\\nUsing the wrong amount of `Iris.End()` calls in your code will lead to an error.\\n\\nEach widget called which might have children should be paired with a call to `Iris.End()`, **even if the Widget doesnt currently have any children**.\\n:::","params":[],"returns":[],"function_type":"static","source":{"line":213,"path":"lib/init.lua"}},{"name":"ForceRefresh","desc":"Destroys and regenerates all instances used by Iris. Useful if you want to propogate state changes.\\n:::caution Caution: Performance\\nBecause this function Deletes and Initializes many instances, it may cause **performance issues** when used with many widgets.\\nIn **no** case should it be called every frame.\\n:::","params":[],"returns":[],"function_type":"static","source":{"line":238,"path":"lib/init.lua"}},{"name":"UpdateGlobalConfig","desc":"Customizes the configuration which **every** widget will inherit from.\\n\\nIt can be used along with [Iris.TemplateConfig] to easily swap styles, for example:\\n```lua\\nIris.UpdateGlobalConfig(Iris.TemplateConfig.colorLight) -- use light theme\\n```\\n:::caution Caution: Performance\\nThis function internally calls [Iris.ForceRefresh] so that style changes are propogated.\\n\\nAs such, it may cause **performance issues** when used with many widgets.\\nIn **no** case should it be called every frame.\\n:::","params":[{"name":"deltaStyle","desc":"a table containing the changes in style ex: `{ItemWidth = UDim.new(0, 100)}`","lua_type":"{ [string]: any }"}],"returns":[],"function_type":"static","source":{"line":260,"path":"lib/init.lua"}},{"name":"PushConfig","desc":"Allows cascading of a style by allowing styles to be locally and hierarchically applied.\\n\\nEach call to Iris.PushConfig must be paired with a call to [Iris.PopConfig], for example:\\n```lua\\nIris.Text({\\"boring text\\"})\\n\\nIris.PushConfig({TextColor = Color3.fromRGB(128, 0, 256)})\\n    Iris.Text({\\"Colored Text!\\"})\\nIris.PopConfig()\\n\\nIris.Text({\\"boring text\\"})\\n```","params":[{"name":"deltaStyle","desc":"a table containing the changes in style ex: `{ItemWidth = UDim.new(0, 100)}`","lua_type":"{ [string]: any }"}],"returns":[],"function_type":"static","source":{"line":285,"path":"lib/init.lua"}},{"name":"PopConfig","desc":"Ends a [Iris.PushConfig] style.\\n\\nEach call to [Iris.PopConfig] should match a call to [Iris.PushConfig].","params":[],"returns":[],"function_type":"static","source":{"line":311,"path":"lib/init.lua"}},{"name":"PushId","desc":"Sets the id discriminator for the next widgets. Use [Iris.PopId] to remove it.","params":[{"name":"id","desc":"custom id","lua_type":"ID"}],"returns":[],"function_type":"static","source":{"line":341,"path":"lib/init.lua"}},{"name":"PopID","desc":"Removes the id discriminator set by [Iris.PushId].","params":[],"returns":[],"function_type":"static","source":{"line":353,"path":"lib/init.lua"}},{"name":"SetNextWidgetID","desc":"Sets the id for the next widget. Useful for using [Iris.Append] on the same widget.\\n```lua\\nIris.SetNextWidgetId(\\"demo_window\\")\\nIris.Window({ \\"Window\\" })\\n    Iris.Text({ \\"Text one placed here.\\" })\\nIris.End()\\n\\n-- later in the code\\n\\nIris.SetNextWidgetId(\\"demo_window\\")\\nIris.Window()\\n    Iris.Text({ \\"Text two placed here.\\" })\\nIris.End()\\n\\n-- both text widgets will be placed under the same window despite being called separately.\\n```","params":[{"name":"id","desc":"custom id.","lua_type":"ID"}],"returns":[],"function_type":"static","source":{"line":379,"path":"lib/init.lua"}},{"name":"State<T>","desc":"Constructs a new [State] object. Subsequent ID calls will return the same object.\\n:::info\\nIris.State allows you to create \\"references\\" to the same value while inside your UI drawing loop.\\nFor example:\\n```lua\\nIris:Connect(function()\\n    local myNumber = 5\\n    myNumber = myNumber + 1\\n    Iris.Text({\\"The number is: \\" .. myNumber})\\nend)\\n```\\nThis is problematic. Each time the function is called, a new myNumber is initialized, instead of retrieving the old one.\\nThe above code will always display 6.\\n***\\nIris.State solves this problem:\\n```lua\\nIris:Connect(function()\\n    local myNumber = Iris.State(5)\\n    myNumber:set(myNumber:get() + 1)\\n    Iris.Text({\\"The number is: \\" .. myNumber})\\nend)\\n```\\nIn this example, the code will work properly, and increment every frame.\\n:::","params":[{"name":"initialValue","desc":"the initial value for the state","lua_type":"T"}],"returns":[{"desc":"","lua_type":"State<T>"}],"function_type":"static","tags":["State"],"source":{"line":421,"path":"lib/init.lua"}},{"name":"WeakState<T>","desc":"Constructs a new state object, subsequent ID calls will return the same object, except all widgets connected to the state are discarded, the state reverts to the passed initialValue","params":[{"name":"initialValue","desc":"the initial value for the state","lua_type":"T"}],"returns":[{"desc":"","lua_type":"State<T>"}],"function_type":"static","tags":["State"],"source":{"line":445,"path":"lib/init.lua"}},{"name":"VariableState<T>","desc":"Returns a state object linked to a local variable.\\n\\nThe passed variable is used to check whether the state object should update. The callback method is used to change the local variable when the state changes.\\n\\nThe existence of such a function is to make working with local variables easier.\\nSince Iris cannot directly manipulate the memory of the variable, like in C++, it must instead rely on the user updating it through the callback provided.\\nAdditionally, because the state value is not updated when created or called we cannot return the new value back, instead we require a callback for the user to update.\\n\\n```lua\\nlocal myNumber = 5\\n\\nlocal state = Iris.VariableState(myNumber, function(value)\\n    myNumber = value\\nend)\\nIris.DragNum({ \\"My number\\" }, { number = state })\\n```\\n\\nThis is how Dear ImGui does the same in C++ where we can just provide the memory location to the variable which is then updated directly.\\n```cpp\\nstatic int myNumber = 5;\\nImGui::DragInt(\\"My number\\", &myNumber); // Here in C++, we can directly pass the variable.\\n```\\n\\n:::warning Update Order\\nIf the variable and state value are different when calling this, the variable value takes precedence.\\n\\nTherefore, if you update the state using `state.value = ...` then it will be overwritten by the variable value.\\nYou must use `state:set(...)` if you want the variable to update to the state\'s value.\\n:::","params":[{"name":"variable","desc":"the variable to track","lua_type":"T"},{"name":"callback","desc":"a function which sets the new variable locally","lua_type":"(T) -> ()"}],"returns":[{"desc":"","lua_type":"State<T>"}],"function_type":"static","tags":["State"],"source":{"line":502,"path":"lib/init.lua"}},{"name":"TableState<K, V>","desc":"Similar to Iris.VariableState but takes a table and key to modify a specific value and a callback to determine whether to update the value.\\n\\nThe passed table and key are used to check the value. The callback is called when the state changes value and determines whether we update the table.\\nThis is useful if we want to monitor a table value which needs to call other functions when changed.\\n\\nSince tables are pass-by-reference, we can modify the table anywhere and it will update all other instances. Therefore, we don\'t need a callback by default.\\n```lua\\nlocal data = {\\n    myNumber = 5\\n}\\n\\nlocal state = Iris.TableState(data, \\"myNumber\\")\\nIris.DragNum({ \\"My number\\" }, { number = state })\\n```\\n\\nHere the `data._started` should never be updated directly, only through the `toggle` function. However, we still want to monitor the value and be able to change it.\\nTherefore, we use the callback to toggle the function for us and prevent Iris from updating the table value by returning false.\\n```lua\\nlocal data ={\\n    _started = false\\n}\\n\\nlocal function toggle(enabled: boolean)\\n    data._started = enabled\\n    if data._started then\\n        start(...)\\n    else\\n        stop(...)\\n    end\\nend\\n\\nlocal state = Iris.TableState(data, \\"_started\\", function(stateValue: boolean)\\n   toggle(stateValue)\\n   return false\\nend)\\nIris.Checkbox({ \\"Started\\" }, { isChecked = state })\\n```\\n\\n:::warning Update Order\\nIf the table value and state value are different when calling this, the table value value takes precedence.\\n\\nTherefore, if you update the state using `state.value = ...` then it will be overwritten by the table value.\\nYou must use `state:set(...)` if you want the table value to update to the state\'s value.\\n:::","params":[{"name":"table","desc":"the table containing the value","lua_type":"{ [K]: V }"},{"name":"key","desc":"the key to the value in table","lua_type":"K"},{"name":"callback","desc":"a function called when the state is changed","lua_type":"((newValue: V) -> false?)?"}],"returns":[{"desc":"","lua_type":"State<V>"}],"function_type":"static","tags":["State"],"source":{"line":581,"path":"lib/init.lua"}},{"name":"ComputedState<T, U>","desc":"Constructs a new State object, but binds its value to the value of another State.\\n:::info\\nA common use case for this constructor is when a boolean State needs to be inverted:\\n```lua\\nIris.ComputedState(otherState, function(newValue)\\n    return not newValue\\nend)\\n```\\n:::","params":[{"name":"firstState","desc":"State to bind to.","lua_type":"State<T>"},{"name":"onChangeCallback","desc":"callback which should return a value transformed from the firstState value","lua_type":"(firstValue: T) -> U"}],"returns":[{"desc":"","lua_type":"State<U>"}],"function_type":"static","source":{"line":633,"path":"lib/init.lua"}},{"name":"ShowDemoWindow","desc":"ShowDemoWindow is a function which creates a Demonstration window. this window contains many useful utilities for coders,\\nand serves as a refrence for using each part of the library. Ideally, the DemoWindow should always be available in your UI.\\nIt is the same as any other callback you would connect to Iris using [Iris.Connect]\\n```lua\\nIris:Connect(Iris.ShowDemoWindow)\\n```","params":[],"returns":[],"function_type":"static","source":{"line":664,"path":"lib/init.lua"}}],"properties":[{"name":"Disabled","desc":"While Iris.Disabled is true, execution of Iris and connected functions will be paused.\\nThe widgets are not destroyed, they are just frozen so no changes will happen to them.","lua_type":"boolean","source":{"line":34,"path":"lib/init.lua"}},{"name":"Args","desc":"Provides a list of every possible Argument for each type of widget to it\'s index.\\nFor instance, `Iris.Args.Window.NoResize`.\\nThe Args table is useful for using widget Arguments without remembering their order.\\n```lua\\nIris.Window({\\"My Window\\", [Iris.Args.Window.NoResize] = true})\\n```","lua_type":"{ [string]: { [string]: any } }","source":{"line":47,"path":"lib/init.lua"}},{"name":"Events","desc":"-todo: work out what this is used for.","lua_type":"table","ignore":true,"source":{"line":56,"path":"lib/init.lua"}},{"name":"TemplateConfig","desc":"TemplateConfig provides a table of default styles and configurations which you may apply to your UI.","lua_type":"{ [string]: { [string]: any } }","source":{"line":322,"path":"lib/init.lua"}}],"types":[{"name":"ID","desc":"","lua_type":"string","source":{"line":5,"path":"lib/WidgetTypes.lua"}},{"name":"Widget","desc":"","lua_type":"{ ID: ID, type: string, lastCycleTick: number, parentWidget: Widget, Instance: GuiObject, ZIndex: number, arguments: { [string]: any }}","source":{"line":26,"path":"lib/WidgetTypes.lua"}}],"name":"Iris","desc":"Iris; contains the all user-facing functions and properties.\\nA set of internal functions can be found in `Iris.Internal` (only use if you understand).\\n\\nIn its simplest form, users may start Iris by using\\n```lua\\nIris.Init()\\n\\nIris:Connect(function()\\n    Iris.Window({\\"My First Window!\\"})\\n        Iris.Text({\\"Hello, World\\"})\\n        Iris.Button({\\"Save\\"})\\n        Iris.InputNum({\\"Input\\"})\\n    Iris.End()\\nend)\\n```","source":{"line":23,"path":"lib/init.lua"}}')}}]);