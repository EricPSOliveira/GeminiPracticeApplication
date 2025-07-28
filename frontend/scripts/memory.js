class BeeMind{
  constructor(){
    this.content = "";
    this.id = -1;
    this.connect = [];
  }

  setMemory(content){
    this.id++;
    this.content = content;
    this.connect.push({id: this.id, memory: this.content});
    console.log(this.connect)
  }

  getLastMemory(){
    return this.connect[this.connect.length - 1];
  }
  getLastfiveMemories(){
    console.log(this.connect.slice(-5))
    return this.connect.slice(-5);
  }

  haveMemory(){
    if(this.connect.length < 2){
      console.log(this.connect)
      return false;
    } else{
      return true;
    }
  }
  haveFiveMemories(){
    if(this.connect.length < 5){
      return false;
    } else{
      return true;
    }
  }

}
