/**
 * @author root on 17-7-11.
 */

/**
 *
 * @param {String} name the player's name
 * @constructor
 * @see mediator.html
 */
function Player(name) {
    this.points = 0;
    this.name = name;
}
Player.prototype.play = function () {
    this.points += 1;
    mediator.played();
};

var scoreboard = {
    element: document.getElementById('results'),
    update: function (score) {
        var i, msg = '';
        for (i in score) {
            if (score.hasOwnProperty(i)) {
                msg += '<p><strong>' + i + '</strong>: ';
                msg += score[i];
                msg += '</p>';
            }
        }
        this.element.innerHTML = msg;
    }
};

var mediator = {
    players: {},
    setup: function () {
        var players = this.players;
        players.home = new Player('Home');
        players.guest = new Player('Guest');
    },
    played: function () {
        var player = this.players,
            score = {
                Home: player.home.points,
                Guest: player.guest.points
            };
        scoreboard.update(score);
    },
    keypress: function (e) {
        e = e || window.event;
        if (e.which === 49) {
            mediator.players.home.play();
            return;
        }
        if (e.which === 48) {
            mediator.players.guest.play();
        }
    }
};
