//Selection Sort algorithm

async function selectionSort(arr) {
    let i, j, k; 
    const n = arr.length; 
  
    for (i = 0; i < n - 1; i++) {
      k = i;
  
      //Change color of the element being compared
      anim(arr[i], arr[i].value, p5);  
      await delayTime(delay2); 
      for (j=i+1; j < n; j++) { 
        //Change color of the current element in iteration
        anim(arr[j], arr[j].value, p6); 
        await delayTime(delay2); 
        if (arr[j].value < arr[k].value) {
          if (k !== i) {
            //If the element at j is < the element at k, then change the color of arr[k] back to original color
            anim(arr[k], arr[k].value, p); 
          }
          k = j; 
        } else {
          //If element at j > element at k, then change its color back to original color
          anim(arr[j], arr[j].value, p); 
        }
        await delayTime(delay2); 
      }
      [arr[k].value, arr[i].value] = [arr[i].value, arr[k].value];
      //Change the element at k back to its original color
      anim(arr[k], arr[k].value, p);
  
      //Change the sorted element at the end of the inner loop to its sorted color 
      anim(arr[i], arr[i].value, sorted); 
      await delayTime(delay2); 
    } 
  
    for (i = 0; i < arr.length; i++) {
      anim(arr[i], arr[i].value, p); 
      await delayTime(delay2); 
    }
  
    for (i = 0; i < arr.length; i++) {
      anim(arr[i], arr[i].value, sorted); 
      await delayTime(delay2); 
    }
  
    c = 0; 
}

const selectSortbtn = document.getElementById("select-sort");
selectSortbtn.addEventListener("click", async function() {  
    await selectionSort(children); 
});