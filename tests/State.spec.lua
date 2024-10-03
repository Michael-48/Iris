local ReplicatedStorage = game:GetService("ReplicatedStorage")

return function()
    local Iris = require(ReplicatedStorage.Iris)

    local state

    beforeEach(function()
        state = Iris.State()
    end)

    describe("State", function()
        it("Should be a state", function()
            expect(state).to.be.a("table")
            expect(state.ID).to.be.a("string")
        end)
        it("SHOULD contain nil", function()
            expect(state:get()).to.equal(nil)
            expect(state.value).to.equal(nil)
            expect(#state.ConnectedFunctions).to.equal(0)
        end)
        it("SHOULD update the value", function()
            expect(state:set(0)).to.be.ok()
            expect(state:get()).to.equal(0)
            expect(state.value).to.equal(0)
        end)
        it("SHOULD update the latest value", function()
            expect(state:set(0)).to.be.ok()
            expect(state:set(state:get() + 1)).to.be.ok()
            expect(state:get()).to.equal(1)
            expect(state.value).to.equal(1)
        end)
        it("SHOULD add a connected function", function()
            expect(state:onChange(function(value)
                expect(value).to.equal(0)
            end))
            expect(state.ConnectedFunctions).to.be.a("table")
            expect(#state.ConnectedFunctions).to.equal(1)
            expect(state.ConnectedFunctions[1]).to.never.equal(nil)
            expect(state.ConnectedFunctions[1]).to.be.a("function")
            expect(state:set(0)).to.be.ok()
        end)
        it("SHOULD chain together two states", function()
            local otherState = Iris.State()
            state:onChange(function(value)
                otherState:set(2 * value)
            end)
            state:set(10)
            expect(otherState:get()).to.equal(20)
        end)
        it("SHOULD disconnect a function", function()
            local number: number = 0
            local disconnect: () -> () = state:onChange(function(value: number)
                number = value
            end)
            expect(disconnect).to.be.a("function")
            expect(#state.ConnectedFunctions).to.equal(1)
            expect(number).to.be.equal(0)
            state:set(1)
            expect(number).to.be.equal(1)
            expect(disconnect()).to.equal(nil)
            expect(#state.ConnectedFunctions).to.equal(0)
            state:set(2)
            expect(number).to.equal(1)
        end)
    end)
end
