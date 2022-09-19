var Pokemon = /** @class */ (function () {
    function Pokemon() {
        this.pokemonType = 'animal';
        this.pokemonFirstName = 'Rose';
        this.age = 22;
    }
    Pokemon.prototype.setPokemon = function (newPokemonType) {
        this.pokemonType = newPokemonType;
    };
    Pokemon.prototype.getPokemonType = function () {
        return this.pokemonType;
    };
    return Pokemon;
}());
var BreadMachine = /** @class */ (function () {
    function BreadMachine(_breadWeight, _waterWeight) {
        this.breadWeight = _breadWeight;
        this.waterWeight = _waterWeight;
    }
    BreadMachine.prototype.setBreadWeight = function (newBreadWeight) {
        if (newBreadWeight > 0) {
            this.breadWeight = newBreadWeight;
        }
        else {
            throw new Error('Bread weight must be greater than 0');
        }
    };
    BreadMachine.prototype.setWaterWeight = function (newWaterWeight) {
        if (newWaterWeight > 0) {
            this.waterWeight = newWaterWeight;
        }
        else {
            throw new Error('Water weight must be greater than 0');
        }
    };
    BreadMachine.prototype.CalculateNewWeight = function () {
        this.breadWeight = this.waterWeight * this.breadWeight;
        return this.breadWeight;
    };
    BreadMachine.prototype.getBreadWeight = function () {
        return this.CalculateNewWeight();
    };
    return BreadMachine;
}());
var breadMachine = new BreadMachine(2, 3);
console.log(breadMachine.getBreadWeight());
breadMachine.setBreadWeight(5);
breadMachine.setWaterWeight(6);
console.log(breadMachine.getBreadWeight());
