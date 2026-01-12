enum CutebotProPIN {
    P0 = 3,
    P1 = 2,
    P2 = 1,
    P8 = 18,
    //P9 = 10,
    P12 = 20,
    P13 = 23,
    P14 = 22,
    P15 = 21,
};

enum CutebotProWheel {
    //% block="왼쪽 바퀴"
    LeftWheel = 1,
    //% block="오른쪽 바퀴"
    RightWheel = 2,
    //% block="모든 바퀴"
    AllWheel = 3
}

enum CutebotProMotors {
    //% block="왼쪽 바퀴"
    M1 = 1,
    //% block="오른쪽 바퀴"
    M2 = 2,
    //% block="모든 바퀴"
    ALL = 3
}

enum CutebotProMotors1 {
    //% block="왼쪽 바퀴"
    M1 = 1,
    //% block="오른쪽 바퀴"
    M2 = 2,
}

enum CutebotProDir {
    //% block="앞으로(정방향)"
    CW = 1,
    //% block="뒤로(역방향)"
    CCW = 2
}

enum CutebotProServoIndex {
    //% block="S1"
    S1 = 1,
    //% block="S2"
    S2 = 2,
    //% block="S3"
    S3 = 3,
    //% block="S4"
    S4 = 4
}

enum CutebotProRGBLight {
    //% block="왼쪽 앞 LED"
    RGBL = 2,
    //% block="오른쪽 앞 LED"
    RGBR = 1,
    //% block="앞 LED 모두"
    RGBA = 3
}

enum CutebotProPatrol {
    //% block="L1"
    L1 = 1,
    //% block="L2"
    L2 = 2,
    //% block="L3"
    L3 = 5,
    //% block="R1"
    R1 = 3,
    //% block="R2"
    R2 = 4,
    //% block="R3"
    R3 = 6
}

enum CutebotProPID {
    //% block="끄기"
    OFF = 0,
    //% block="켜기"
    ON = 1
}

enum CutebotProDistanceUnits {
    //% block="cm(센티미터)"
    Cm = 0,
    //% block="inch(인치)"
    Ft = 1,
}

enum CutebotProAngleUnits {
    //% block="각도(°)"
    Angle = 0,
    //% block="바퀴 수(바퀴)"
    Circle = 1,
}

enum CutebotProOrientation {
    //% block="앞으로"
    Advance = 1,
    //% block="뒤로"
    Retreat = 0
}

enum CutebotProSpeedUnits {
    //% block="cm/초"
    Cms = 0,
    //% block="inch/초"
    Ins = 1
}

enum CutebotProTurn {
    //% block="왼쪽으로 돌기"
    Left = 0,
    //% block="오른쪽으로 돌기"
    Right = 1,
    //% block="제자리에서 왼쪽 돌기"
    LeftInPlace = 2,
    //% block="제자리에서 오른쪽 돌기"
    RightInPlace = 3
}

enum CutebotProAngle {
    //% block="45°"
    Angle45 = 45,
    //% block="90°"
    Angle90 = 90,
    //% block="135°"
    Angle135 = 135,
    //% block="180°"
    Angle180 = 180
}

enum TrackbitStateType {
    //% block="◌ ◌ ◌ ◌"
    Tracking_State_0 = 0,
    //% block="◌ ● ● ◌"
    Tracking_State_1 = 6,
    //% block="◌ ◌ ● ◌"
    Tracking_State_2 = 4,
    //% block="◌ ● ◌ ◌"
    Tracking_State_3 = 2,

    //% block="● ◌ ◌ ●"
    Tracking_State_4 = 9,
    //% block="● ● ● ●"
    Tracking_State_5 = 15,
    //% block="● ◌ ● ●"
    Tracking_State_6 = 13,
    //% block="● ● ◌ ●"
    Tracking_State_7 = 11,

    //% block="● ◌ ◌ ◌"
    Tracking_State_8 = 1,
    //% block="● ● ● ◌"
    Tracking_State_9 = 7,
    //% block="● ◌ ● ◌"
    Tracking_State_10 = 5,
    //% block="● ● ◌ ◌"
    Tracking_State_11 = 3,

    //% block="◌ ◌ ◌ ●"
    Tracking_State_12 = 8,
    //% block="◌ ● ● ●"
    Tracking_State_13 = 14,
    //% block="◌ ◌ ● ●"
    Tracking_State_14 = 12,
    //% block="◌ ● ◌ ●"
    Tracking_State_15 = 10
}

enum TrackbitType {
    //% block="◌"
    State_0 = 0,
    //% block="●"
    State_1 = 1
}

enum TrackbitChannel {
    //% block="1"
    One = 1,
    //% block="2"
    Two = 2,
    //% block="3"
    Three = 3,
    //% block="4"
    Four = 4
}

enum ServoType {
    //% block="180°"
    Servo180 = 1,
    //% block="270°"
    Servo270 = 2,
    //% block="360°"
    Servo360 = 3
}

enum SonarUnit {
    //% block="cm(센티미터)"
    Centimeters,
    //% block="inch(인치)"
    Inches
}

enum CutbotProIRButtons {
    //% block="전원(OFF)"
    Off = 1,
    //% block="메뉴"
    Menu = 2,
    //% block="위"
    Up = 5,
    //% block="왼쪽"
    Left = 8,
    //% block="오른쪽"
    Right = 10,
    //% block="아래"
    Down = 13,
    //% block="확인(OK)"
    OK = 9,
    //% block="더하기(+)"
    Plus = 4,
    //% block="빼기(-)"
    Minus = 12,
    //% block="뒤로"
    Back = 6,
    //% block="0"
    Zero = 14,
    //% block="1"
    One = 16,
    //% block="2"
    Two = 17,
    //% block="3"
    Three = 18,
    //% block="4"
    Four = 20,
    //% block="5"
    Five = 21,
    //% block="6"
    Six = 22,
    //% block="7"
    Seven = 24,
    //% block="8"
    Eight = 25,
    //% block="9"
    Nine = 26
}

let IR_Val = 0
let _initEvents = true
let PidUseFlag = 0
let blocklength = 0
let distanceUnitsFlag = 0
let fourWayStateValue = 0
let pulseCntL = 0
let pulseCntR = 0

//% weight=100 color=#008C8C block="큐트봇 프로" blockId="Cutebot Pro" icon="\uf48b"
namespace CutebotPro {

    /**
    * PID ON or OFF
    */
    //% block="PID %PID"
    //% weight=201
    /*export function PIDSwitch(pid: PID): void {
        let buf = pins.createBuffer(7);
        buf[0] = 0x99;
        buf[1] = 0x00;
        buf[2] = pid;
        buf[3] = 0x00;
        buf[4] = 0x00;
        buf[5] = 0x00;
        buf[6] = 0x88;
        pins.i2cWriteBuffer(i2cAddr, buf);
    }*/

    /**
    * PWM control the car to travel at a specific speed
    */
    //% group="기본 조작"
    //% block="왼쪽 바퀴 속도 %speedL\\%, 오른쪽 바퀴 속도 %speedR\\%"
    //% speed.min=-100 speed.max=100
    //% weight=340
    export function pwmCruiseControl(speedL: number, speedR: number): void {
        if (readHardVersion() == 2) {
            cutebotProV2.motorControl(2, speedL, speedR);
        } else {
            cutebotProV1.pwmCruiseControl(speedL, speedR);
        }
    }

    /**
     * full speed forward
     */
    //% group="기본 조작"
    //% weight=360
    //% block="최대 속도로 앞으로 가기"
    export function fullSpeedAhead(): void {
        if (readHardVersion() == 2) {
            cutebotProV2.motorControl(2, 100, 100)
        } else {
            cutebotProV1.fullSpeedAhead();
        }
    }

    /**
     * full speed reverse
     */
    //% group="기본 조작"
    //% weight=350
    //% block="최대 속도로 뒤로 가기"
    export function fullAstern(): void {
        if (readHardVersion() == 2) {
            cutebotProV2.motorControl(2, -100, -100)
        } else {
            cutebotProV1.fullAstern();
        }
    }

    /**
     * stop immediately
     */
    //% group="기본 조작"
    //% weight=330
    //% block="%CutebotProMotors 바로 멈추기"
    export function stopImmediately(wheel: CutebotProMotors): void {
        if (readHardVersion() == 2) {
            cutebotProV2.motorControl(wheel - 1, 0, 0);
        } else {
            cutebotProV1.stopImmediately(wheel);
        }
    }

    /**
     * read motor speed
     */
    //% group="기본 조작"
    //% weight=320
    //% block="%CutebotProMotors1 속도(%CutebotProSpeedUnits) 읽기"
    export function readSpeed(motor: CutebotProMotors1, speedUnits: CutebotProSpeedUnits): number {
        if (readHardVersion() == 2) {
            return cutebotProV2.readSpeed(motor - 1, speedUnits);
        } else {
            return cutebotProV1.readSpeed(motor, speedUnits);
        }
    }

    /**
    * 获取编码电机的脉冲数
    */
    export function pulseNumber(): void {
        cutebotProV1.pulseNumber();
    }

    /**
     * obtain the number of pulses produced by the coded motor on both sides of the wheel
    */
    export function readPulsenumberTest(motor: CutebotProMotors1): number {
        return cutebotProV1.readPulsenumberTest(motor);
    }

    /**
    * get the rotation degrees of wheel
    */
    //% group="기본 조작"
    //% weight=310
    //% block="%CutebotProMotors1 바퀴가 돈 각도(°) 읽기"
    export function readDistance(motor: CutebotProMotors1): number {
        if (readHardVersion() == 2) {
            return cutebotProV2.readDistance(motor - 1);
        } else {
            return cutebotProV1.readDistance(motor);
        }
    }

    /**
     * clear the rotation degrees of wheel
     */
    //% group="기본 조작"
    //% weight=300
    //% block="%CutebotProMotors1 바퀴 각도 초기화"
    export function clearWheelTurn(motor: CutebotProMotors1): void {
        if (readHardVersion() == 2) {
            cutebotProV2.clearWheelTurn(motor - 1);
        } else {
            cutebotProV1.clearWheelTurn(motor);
        }
    }

    /**
    * select a headlights and set the RGB color.
    * @param R R color value of RGB color
    * @param G G color value of RGB color
    * @param B B color value of RGB color
    */
    //% group="앞 LED"
    //% inlineInputMode=inline
    //% blockId=RGB block="앞 LED(%CutebotProRGBLight) 색 R:%r G:%g B:%b"
    //% r.min=0 r.max=255
    //% g.min=0 g.max=255
    //% b.min=0 b.max=255
    //% weight=280
    export function singleHeadlights(light: CutebotProRGBLight, r: number, g: number, b: number): void {
        if (readHardVersion() == 2) {

            let arr = [1, 0, 2]
            cutebotProV2.singleHeadlights(arr[light - 1], r, g, b)
        } else {
            cutebotProV1.singleHeadlights(light, r, g, b);
        }
    }

    /**
    * set LED headlights.
    */
    //% group="앞 LED"
    //% block="앞 LED(%CutebotProRGBLight) 색을 %color로"
    //% color.shadow="colorNumberPicker"
    //% weight=290
    export function colorLight(light: CutebotProRGBLight, color: number) {
        if (readHardVersion() == 2) {
            let arr = [1, 0, 2]
            cutebotProV2.colorLight(arr[light - 1], color)
        } else {
            cutebotProV1.colorLight(light, color);
        }
    }

    /**
    * turn off all the LED lights
    */
    //% group="앞 LED"
    //% block="앞 LED 모두 끄기"
    //% weight=270
    export function turnOffAllHeadlights(): void {
        if (readHardVersion() == 2) {
            cutebotProV2.turnOffAllHeadlights();
        } else {
            cutebotProV1.turnOffAllHeadlights();
        }
    }

    /**
    * get a status value of the 4-way line following sensor
    */
    //% group="라인 센서"
    //% weight=270
    //% block="라인 센서 상태값 읽기"
    export function trackbitStateValue() {
        if (readHardVersion() == 2) {
            cutebotProV2.trackbitStateValue();
        } else {
            cutebotProV1.trackbitStateValue();
        }
    }

    /**
    * 4-way line following sensor offset
    */
    //% group="라인 센서"
    //% weight=250
    //% block="라인 센서 오프셋 값"
    export function getOffset(): number {
        if (readHardVersion() == 2) {
            return cutebotProV2.getOffset();
        } else {
            return cutebotProV1.getOffset();
        }
    }

    /**
    * get Grayscale Sensor State
    */
    //% group="라인 센서"
    //% weight=260
    //% block="라인 센서 상태가 %TrackbitStateType 인가?"
    export function getGrayscaleSensorState(state: TrackbitStateType): boolean {
        if (readHardVersion() == 2) {
            return cutebotProV2.getGrayscaleSensorState(state);
        } else {
            return cutebotProV1.getGrayscaleSensorState(state);
        }
    }

    /**
    * check whether the channel is online
    */
    //% group="라인 센서"
    //% weight=240
    //% block="%TrackbitChannel번 센서가 %TrackbitType 인가?"
    export function trackbitChannelState(channel: TrackbitChannel, state: TrackbitType): boolean {
        if (readHardVersion() == 2) {
            return cutebotProV2.trackbitChannelState(channel - 1, state);
        } else {
            return cutebotProV1.trackbitChannelState(channel, state);
        }
    }

    /**
    * get gray value.The range is from 0 to 255.
    */
    //% group="라인 센서"
    //% weight=230
    //% block="%TrackbitChannel번 센서 밝기값(0~255)"
    export function trackbitgetGray(channel: TrackbitChannel): number {
        if (readHardVersion() == 2) {
            return cutebotProV2.trackbitgetGray(channel - 1);
        } else {
            return cutebotProV1.trackbitgetGray(channel);
        }
    }

    /**
      * cars can extend the ultrasonic function to prevent collisions and other functions..
      * @param Sonarunit two states of ultrasonic module
      */
    //% group="초음파 센서"
    //% blockId=ultrasonic block="초음파 거리(%SonarUnit)"
    //% weight=220
    export function ultrasonic(unit: SonarUnit, maxCmDistance = 500): number {
        return cutebotProV1.ultrasonic(unit, maxCmDistance);
    }

    /**
     * control the car to travel at a specific speed (speed.min=20cm/s speed.max=50cm/s)
     */
    //% group="PID 조작(정확하게)"
    //% block="왼쪽 %speedL, 오른쪽 %speedR (%CutebotProSpeedUnits)로 달리기"
    //% weight=210
    export function cruiseControl(speedL: number, speedR: number, speedUnits: CutebotProSpeedUnits): void {
        if (readHardVersion() == 2) {
            cutebotProV2.pidSpeedControl(speedL, speedR, speedUnits);
        } else {
            cutebotProV1.cruiseControl(speedL, speedR, speedUnits);
        }
    }

    /**
     * set the car to travel a specific distance(distance.max=255cm, distance.min=0cm)
     */
    //% group="PID 조작(정확하게)"
    //% weight=200
    //% block="%distance %CutebotProDistanceUnits 만큼 %CutebotProOrientation 가기"
    export function distanceRunning(orientation: CutebotProOrientation, distance: number, distanceUnits: CutebotProDistanceUnits): void {
        if (readHardVersion() == 2) {
            cutebotProV2.pidRunDistance(orientation ? 0 : 1, distance, distanceUnits)
        } else {
            cutebotProV1.distanceRunning(orientation, distance, distanceUnits);
        }
    }

    /**
     * set the car to travel a specific distance(distance.max=255cm, distance.min=0cm)
     */
    //% group="PID 조작(추가)"
    //% weight=200
    //% block="%speed %CutebotProSpeedUnits로 %distance %CutebotProDistanceUnits 만큼 %CutebotProOrientation 가기"
    //% speed.min=20 speed.max=50 speed.defl=25
    //% inlineInputMode=inline
    export function distanceSpeedRunning(speed: number, unitspeed: CutebotProSpeedUnits, orientation: CutebotProOrientation, distance: number, distanceUnits: CutebotProDistanceUnits): void {
        if (readHardVersion() == 2) {
            cutebotProV2.pidSpeedRunDistance(speed, unitspeed, orientation ? 0 : 1, distance, distanceUnits)
        }
    }

    /**
     *
     */
    //% group="PID 조작(정확하게)"
    //% weight=200
    //% block="%CutebotProWheel 을 %angle %CutebotProAngleUnits 만큼 돌리기"
    export function angleRunning(orientation: CutebotProWheel, angle: number, angleUnits: CutebotProAngleUnits): void {
        if (readHardVersion() == 2) {
            cutebotProV2.pidRunAngle(orientation - 1, angle, angleUnits);
        } else {
            cutebotProV1.angleRunning(orientation, angle, angleUnits);
        }
    }

    /**
     *
     */
    export function angleSpeedRunning(orientation: CutebotProWheel, speed: number, angle: number, angleUnits: CutebotProAngleUnits): void {
        if (readHardVersion() == 2) {
            cutebotProV2.pidSpeedRunAngle(speed, orientation - 1, angle, angleUnits);
        }
    }

    /**
    * set block length
    */
    //% group="PID 조작(정확하게)"
    //% weight=180
    //% block="한 칸 길이를 %length %CutebotProDistanceUnits 로 정하기"
    export function setBlockCnt(length: number, distanceUnits: CutebotProDistanceUnits): void {
        if (readHardVersion() == 2) {
            cutebotProV2.pidBlockSet(length, distanceUnits);
        } else {
            cutebotProV1.setBlockCnt(length, distanceUnits);
        }
    }

    /**
    * run a specific number of block
    */
    //% group="PID 조작(정확하게)"
    //% weight=170
    //% block="앞으로 %cnt 칸 가기"
    export function runBlockCnt(cnt: number): void {
        if (readHardVersion() == 2) {
            cutebotProV2.pidRunBlock(cnt);
        } else {
            cutebotProV1.runBlockCnt(cnt);
        }
    }

    /**
     * set the trolley to rotate at a specific Angle
     * @param angle set the angle unit
     */
    //% group="PID 조작(정확하게)"
    //% weight=190
    //% block="%CutebotProTurn 로 %angle° 돌기"
    //% angle.min=0 angle.max=360
    export function trolleySteering(turn: CutebotProTurn, angle: number): void {
        if (readHardVersion() == 2) {
            cutebotProV2.pidRunSteering(turn, angle);
        } else {
            cutebotProV1.trolleySteering(turn, angle);
        }
    }

    /**
     * set the trolley to rotate at a specific Angle
     * @param angle set the angle unit
     */
    //% group="PID 조작(추가)"
    //% weight=190
    //% block="속도 %speed \\%로 %CutebotProTurn , %angle° 돌기"
    //% speed.min=0 speed.max=100 speed.defl=50
    //% inlineInputMode=inline
    //% angle.min=0 angle.max=360
    export function trolleySpeedSteering(speed: number, turn: CutebotProTurn, angle: number): void {
        if (readHardVersion() == 2) {
            cutebotProV2.pidSpeedRunSteering(speed, turn, angle);
        }
    }

    //% shim=IRV2::irCode
    function irCode(): number {
        return 0;
    }

    //% group="리모컨(IR)"
    //% weight=160
    //% block="리모컨(IR) 신호를 받았을 때"
    export function irCallback(handler: (code: number) => void) {
        cutebotProV1.irCallback(handler);
    }

    /**
     * get IR value
     */
    //% group="리모컨(IR)"
    //% block="리모컨 버튼 %CutbotProIRButtons 눌렀나요?"
    //% weight=150
    export function irButton(Button: CutbotProIRButtons): boolean {
        return cutebotProV1.irButton(Button);
    }

    /**
     * servo control module
     */
    //% group="확장 포트"
    //% weight=120
    //% block="%ServoType 서보 %CutebotProServoIndex 각도 %angle°로 정하기"
    export function extendServoControl(servotype: ServoType, index: CutebotProServoIndex, angle: number): void {
        if (readHardVersion() == 2) {
            cutebotProV2.extendServoControl(servotype, index, angle);
        } else {
            cutebotProV1.extendServoControl(servotype, index, angle);
        }
    }

    /**
     * continuous servo control
     */
    //% group="확장 포트"
    //% weight=110
    //% block="연속 서보 %CutebotProServoIndex 속도 %speed\\%로 정하기"
    export function continuousServoControl(index: CutebotProServoIndex, speed: number): void {
        if (readHardVersion() == 2) {
            cutebotProV2.continuousServoControl(index, speed);
        } else {
            cutebotProV1.continuousServoControl(index, speed);
        }
    }

    /**
     * motor control module
     */
    //% group="확장 포트"
    //% weight=140
    //% block="확장 모터 속도 %speed\\%로 정하기"
    //% speed.min=-100  speed.max=100
    export function extendMotorControl(speed: number): void {
        if (readHardVersion() == 2) {
            cutebotProV2.extendMotorControl(speed);
        } else {
            cutebotProV1.extendMotorControl(speed);
        }
    }

    /**
     * extend motor stop
     */
    //% group="확장 포트"
    //% weight=130
    //% block="확장 모터 멈추기"
    export function extendMotorStop(): void {
        if (readHardVersion() == 2) {
            cutebotProV2.extendMotorStop();
        } else {
            cutebotProV1.extendMotorStop();
        }
    }

    /**
    * read version number
    */
    //% group="기타"
    //% weight=1
    //% block="버전 번호"
    export function readVersions(): string {
        if (readHardVersion() == 2) {
            return cutebotProV2.readVersions();
        } else {
            return cutebotProV1.readVersions();
        }
    }

    let version = -1;
    export function readHardVersion(): number {
        if (version == -1) {

            let i2cBuffer = pins.createBuffer(7);
            i2cBuffer[0] = 0x99;
            i2cBuffer[1] = 0x15;
            i2cBuffer[2] = 0x01;
            i2cBuffer[3] = 0x00;
            i2cBuffer[4] = 0x00;
            i2cBuffer[5] = 0x00;
            i2cBuffer[6] = 0x88;
            pins.i2cWriteBuffer(0x10, i2cBuffer)
            //cutebotProV2.i2cCommandSend(0xA0, [0x00])
            version = pins.i2cReadNumber(0x10, NumberFormat.UInt8LE, false);
            if (version != 1) {
                version = 2;
            }
        }
        return version;
        // return 2;
    }

    /******************************************************************************************************
     * 可修改延时函数，默认为500毫秒
     * 增大可增加pid控制延时，可优化行动后停顿过长等
     * 减少（负数）可减少pid控制延时，可优化行动后停顿过短等
     * 单位为毫秒MS
     ******************************************************************************************************/
    export function setbause() {
        cutebotProV2.setbause(500);
    }
}
