function ping(
    trig: DigitalPin,
    echo: DigitalPin,
    maxcm_distance = 500): number {

        pins.setPull(trig, PinPullMode.PullNone);
        pins.digitalWritePin(trig, 0);
        control.waitMicros(2); // reset
        pins.digitalWritePin(trig, 1);
        control.waitMicros(10); // pipa 10 ms
        pins.digitalWritePin(trig, 0);

        let duration = pins.pulseIn(echo, PulseValue.High, 1/340 * 10);
    return duration; // v mikrosekundach
}

basic.forever(function() {
    console.logValue("duration", ping(DigitalPin.P8, DigitalPin.P15));
    basic.pause(3000)
})