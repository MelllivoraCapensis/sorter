class Sorter {
  constructor() {
    this.elements=[];
    this.compareFunction=(a,b)=>a-b;
   }

  add(element) {
    this.elements.push(element);
  }

  at(index) {
     return this.elements[index];
  }

  get length() {
    return this.elements.length;
  }

  toArray() {
    return this.elements;
  }

  sort(indices) {
       indices=indices.sort();
       var sort_arr=[];
       for (var i=0; i<indices.length;i++) {
          sort_arr.push(this.elements[indices[i]]);
       }
       sort_arr=sort_arr.sort(this.compareFunction);
       for (var i=0; i<indices.length;i++) {
         this.elements[indices[i]]=sort_arr[i];
       }
  }

  setComparator(compareFunction) {
    this.compareFunction=compareFunction;
  }
}

module.exports = Sorter;
