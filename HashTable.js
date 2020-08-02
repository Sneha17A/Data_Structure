class HashTable{
    constructor(size){
        this.data = new Array(size);
    }

_hash(key) {
    let hash = 0;
    for(let i=0;i<key.length;i++){
        hash = (hash + key.charCodeAt(i)*i)%this.data.length
    }
    return hash; 
}

   set(key,value) {
    let address = this._hash(key);
      if(!this.data[address]){
        this.data[address]=[];
      }
      this.data[address].push([key,value])
      return this.data
    }

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        console.log(currentBucket)
        if(currentBucket) {
            for(let i=0;i<currentBucket.length;i++)
            {
                if(currentBucket[i][0]===key){
                    console.log( currentBucket[i][1])
                }
            }
        }
        console.log( undefined)
    }
}
const myHashTable = new HashTable(10);
myHashTable.set('grapes',10000);
myHashTable.set('apples',40);
myHashTable.get('grapeas');