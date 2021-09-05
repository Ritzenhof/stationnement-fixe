motorbit.forward(0)
let left = pins.digitalReadPin(DigitalPin.P3)
let rigth = pins.digitalReadPin(DigitalPin.P4)
if (rigth == 0 || left == 0) {
    motorbit.freestyle(0, 0)
}
