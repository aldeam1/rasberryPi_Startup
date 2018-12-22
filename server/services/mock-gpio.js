const ports = {};

module.exports = function(pin, flow) {
    if (flow === 'high') {
        ports[pin] = 1;
    } else {
        ports[pin] = 0;
    }
    this.writeSync = (value) => {
        ports[pin] = value;
    };
    this.readSync = () => {
        if (ports[pin] !== undefined) {
            return ports[pin];
        }
        return false;
    };
    this.watch = (cb) => { };
    this.unwatch = () => { };
};
