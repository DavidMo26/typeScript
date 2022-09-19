class Pokemon{
    private pokemonType: string;
    private pokemonFirstName: string;
    private age: number;
    public shirt: string;
    constructor(){
        this.pokemonType = 'animal';
        this.pokemonFirstName = 'Rose';
        this.age = 22;
    }
    public setPokemon(newPokemonType:string){
        this.pokemonType = newPokemonType;
    }
    public getPokemonType():string{
        return this.pokemonType;
    }
}

class BreadMachine{
    private breadWeight: number;
    private waterWeight: number;

    constructor(_breadWeight:number,_waterWeight:number){
        this.breadWeight = _breadWeight;
        this.waterWeight = _waterWeight;   
    }


    public setBreadWeight(newBreadWeight:number){
        if(newBreadWeight > 0){
        this.breadWeight = newBreadWeight;
        }
        else{
            throw new Error('Bread weight must be greater than 0');
        }
    }

    public setWaterWeight(newWaterWeight:number){
        if(newWaterWeight > 0){
        this.waterWeight = newWaterWeight;
        }
        else{
            throw new Error('Water weight must be greater than 0');
        }
    }

    private CalculateNewWeight():number{
        this.breadWeight = this.waterWeight*this.breadWeight;
        return this.breadWeight;
    }
    public getBreadWeight():number{
        return this.CalculateNewWeight();
    }
}

let breadMachine = new BreadMachine(2,3);
console.log(breadMachine.getBreadWeight());
breadMachine.setBreadWeight(5);
breadMachine.setWaterWeight(6);
console.log(breadMachine.getBreadWeight());


