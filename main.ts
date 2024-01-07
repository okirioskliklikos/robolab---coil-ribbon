input.onButtonPressed(Button.A, function () {
    if (cur_speed != 0) {
        basic.showIcon(IconNames.SmallSquare)
        wuKong.stopMotor(wuKong.MotorList.M1)
        cur_speed = 0
    } else {
        cur_speed = 0 - Math.abs(def_speed)
        basic.showArrow(ArrowNames.North)
        wuKong.setMotorSpeed(wuKong.MotorList.M1, cur_speed)
    }
})
input.onButtonPressed(Button.B, function () {
    if (cur_speed != 0) {
        basic.showIcon(IconNames.SmallSquare)
        wuKong.stopMotor(wuKong.MotorList.M1)
        cur_speed = 0
    } else {
        cur_speed = def_speed
        basic.showArrow(ArrowNames.South)
        wuKong.setMotorSpeed(wuKong.MotorList.M1, cur_speed)
    }
})
let cur_speed = 0
let def_speed = 0
def_speed = 19
cur_speed = 0
basic.showIcon(IconNames.SmallSquare)
