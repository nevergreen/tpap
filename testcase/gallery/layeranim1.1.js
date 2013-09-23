var S = KISSY, D = S.DOM, E = S.Event;

var anim = new KISSY.LayerAnim([
    {

        node: '.layer1',
        form: {
            left: 10,
            top: 10
        },
        to: {
            left: 200,
            top: 200
        },
        duration: 5
    },
    {

        node: '.layer3',
        form: {
            left: 10,
            top: 10
        },
        to: {
            left: 300,
            top: 300
        },
        duration: 1
    },
    [
        {

            node: '.layer4',
            align: 'sequence',
            form: {
                left: 10,
                top: 10
            },
            to: {
                left: 100,
                top: 100
            },
            duration: 5
        },
        {

            node: '.layer5',
            form: {
                left: 10,
                top: 10
            },
            to: {
                left: 400,
                top: 400
            },
            duration: 5
        }
    ]
]);

var msg = D.get('.msg');


// event
anim.on('start', function() {
    msg.innerHTML = 'anim start ...';
});

anim.on('update', function() {
    msg.innerHTML = 'anim update ... ';
});

anim.on('end', function() {
    msg.innerHTML = 'anim end ...';
});

// method
E.on('.run', 'click', function() {
    anim.run();
});

E.on('.runReverse', 'click', function() {
    anim.runReverse();
});

E.on('.pause', 'click', function() {
    anim.pause();
});

E.on('.resume', 'click', function() {
    anim.resume();
});

E.on('.stop1', 'click', function() {
    anim.stop(false);
});

E.on('.stop2', 'click', function() {
    anim.stop(true);
});

E.on('.seek', 'click', function() {
    anim.seek(1);
});

E.on('.end', 'click', function() {
    anim.end();
});

E.on('.kill', 'click', function() {
    anim.kill();
});

E.on('.add', 'click', function() {
    anim.add({
        node: '.layer2',
        form: {
            left: 0,
            top: 0
        },
        to: {
            left: 400,
            top: 400
        },
        duration: 1
    });
});

E.on('.clear', 'click', function() {
    anim.clear();
});