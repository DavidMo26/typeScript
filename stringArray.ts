class Names {
  private names: string[] = [];

  public addName(name: string) {
    this.names.push(name);
  }
  public deleteName(index: number) {
    this.names.splice(index, 1);
  }
  public getName(index: number) {
    return this.names[index];
  }
}

class Search {
  public searchName(name: string, names: string[]) {
    names.forEach((element) => {
      if (element == name) {
        return name;
      }
    });
  }
}
