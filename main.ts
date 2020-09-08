radio.onReceivedString(function (receivedString) {
    if (parseFloat(receivedString) == id) {
        radio.sendNumber(result)
    }
})
let result = 0
let id = 0
radio.setGroup(99)
id = 1
let offset = input.rotation(Rotation.Pitch)
let counter = 2
let index = counter
basic.forever(function () {
    if (offset - input.rotation(Rotation.Pitch) <= 3) {
        result = 1
    }
    if (input.rotation(Rotation.Pitch) - offset > 3) {
        result = 2
    }
    if (input.rotation(Rotation.Pitch) - offset > 7) {
        result = 3
    }
    if (input.rotation(Rotation.Pitch) - offset > 11) {
        result = 4
    }
    if (input.rotation(Rotation.Pitch) - offset > 13) {
        result = 5
    }
    basic.showNumber(result)
})
