//Bubble Sort Algorithm

async function bubbleSort(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        anim(arr[j], arr[j].value, p1);
        anim(arr[j + 1], arr[j + 1].value, p2);
        await delayTime(delay2);   
        if (arr[j].value > arr[j + 1].value) {
          [arr[j].value, arr[j + 1].value] = [arr[j + 1].value, arr[j].value];
          anim(arr[j], arr[j].value, p2);
          anim(arr[j + 1], arr[j + 1].value, p1);
          await delayTime(delay2); 
        }
        anim(arr[j], arr[j].value, p);
        anim(arr[j + 1], arr[j + 1].value, p);
      }
      await delayTime(delay2); 
      anim(arr[n - i - 1], arr[n - i - 1].value, sorted);
    }
    sortState = true;
    c = 0;
}


const bubbleSortBtn = document.getElementById('bbl-sort'); 
bubbleSortBtn.addEventListener('click', async function() {
  disableBtn(); 
  await bubbleSort(children); 
  enableBtn(); 
})