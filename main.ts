let strip = neopixel.create(DigitalPin.P16, 48, NeoPixelMode.RGB);
strip.showRainbow(0,359);
strip.show();

basic.forever(function() {
    strip.rotate();
    strip.show();
    basic.pause(10);
})


  
