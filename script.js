let stardust = 0;
let stardustMulti = 1;
let tier = 0;
let tierPoints = 0;

let upgrades = {
  stardustI: {
    cost: 20,
    level: 0,
    buy() {
      if (stardust >= this.cost) {
        stardust -= this.cost;
        this.cost = Math.floor(this.cost * 1.1);
        this.level += 1;
        stardustMulti += 1; // Assuming the upgrade increases the stardust multiplier
      }
    },
  },
};

function update() {
  $("#stardust-counter").text(`${stardust} stardust`);
  $("#tier-display").text(
    `Tier ${tier} (${tierPoints}/${Math.floor(10 * 1.2 ** tier)})`
  );
  $("#stardust-I-lvl-display").text(
    `Stardust I (Level ${upgrades.stardustI.level}, ${upgrades.stardustI.cost} stardust)`
  );
}

$(function () {
  update();
  $("#stardust-button").click(function () {
    stardust += stardustMulti;
    tierPoints += 1;
    while (tierPoints >= Math.floor(10 * 1.2 ** tier)) {
      tierPoints -= Math.floor(10 * 1.2 ** tier);
      tier += 1;
    }
    update();
  });
  $("#stardust-I-button").click(function () {
    upgrades.stardustI.buy();
    update();
  });
});
