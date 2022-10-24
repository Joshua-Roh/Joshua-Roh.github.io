function swap(arr, i, j) {
    let temp = arr[i].value; 
    arr[i].value = arr[j].value; 
    arr[j].value = temp; 
}


async function partition (arr, low, high) {

    let i = low - 1
    let pivot = arr[high].value; 
    anim(arr[high], arr[high].value, 'cyan')
    await delayTime(delay2);  
    for (let j = low; j <= high - 1; j++) {
  
    
      anim(arr[j], arr[j].value, 'yellow') 
      await delayTime(delay2);  
  
      if (arr[j].value < arr[high].value) {
        i++; 
        swap(arr, i, j);
        anim(arr[i], arr[i].value, 'orange') 
  
        if (i != j) {
          anim(arr[j], arr[j].value, 'orange')
          arr[j].style.backgroundColor = 'orange'; 
          await delayTime(delay2);  
        }
      } else {
        anim(arr[j], arr[j].value, 'pink') 
      }
    } 
    await delayTime(delay2);  
  
    swap(arr, i+1, high);
    anim(arr[high], arr[high].value, 'pink')
    anim(arr[i+1], arr[i+1].value, 'green')  

    await delayTime(delay2);  
    
    for (let k = 0; k < arr.length; k++) {
      if (arr[k].style.backgroundColor != 'green') {
        anim(arr[k], arr[k].value, '#e43f5a') 
      }
    }
    return (i+1); 
}
  
async function quickSort(arr, low, high) {

    if (low < high) {
        let partitionIndex = await partition(arr, low, high); 
        await quickSort(arr, low, partitionIndex-1); 
        await quickSort(arr, partitionIndex+1, high);
    }else{
        if(low >= 0 && high >= 0 && low <arr.length && high < arr.length){
            anim(arr[high], arr[high].value, 'green'); 
            anim(arr[low], arr[low].value, 'green')
        }
    }
}

const quickSortBtn = document.getElementById('quick-sort'); 
quickSortBtn.addEventListener('click', async function() {
    disableBtn();  
    let low = 0; 
    let n = children.length;
    await quickSort(children, low, n - 1);
    enableBtn(); 
})