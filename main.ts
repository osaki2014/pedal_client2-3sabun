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
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) - offset <= 8) {
        result = 1
    }
    if (input.rotation(Rotation.Pitch) - offset > 8) {
        result = 2
    }
    if (input.rotation(Rotation.Pitch) - offset > 18) {
        result = 3
    }
    if (input.rotation(Rotation.Pitch) - offset > 28) {
        result = 4
    }
    if (input.rotation(Rotation.Pitch) - offset > 33) {
        result = 5
    }
    basic.showNumber(result)
})
