
async function merge(arr, low, mid, high) {
    let n1 = mid - low + 1; 
    let n2 = high - mid; 
    var left = new Array(n1); 
    var right = new Array(n2); 

    for (let i = 0; i < n1; i++) {
        left[i] = (arr[low+i].value);
        anim(arr[low+i], arr[low+i].value, 'orange');   
        await delayTime(delay2); 
    }

    for (let i = 0; i < n2; i++) {
        right[i] = (arr[mid+i+1].value)
        anim(arr[mid+i+1], arr[mid+i+1].value, 'cyan')  
        await delayTime(delay2); 
    }

    await delayTime(delay2); 
    let i = 0, j = 0, k = low; 

    while (i < n1 && j < n2) {
        if (left[i] <= right[j]) {
            if ((n1+n2) === arr.length) {
                arr[k].style.backgroundColor = 'green'; 
            } else {
                arr[k].value = left[i];
                anim(arr[k], arr[k].value, 'lightgreen'); 
                i++; 
                await delayTime(delay2); 
            }

        } else {
            if ((n1+n2) === arr.length) {
                arr[k].style.backgroundColor = 'green'; 
            } else {
                arr[k].value = right[j]; 
                anim(arr[k], arr[k].value, 'lightgreen'); 
                j++; 
                await delayTime(delay2);
            }
            
        }
        k++; 
        await delayTime(delay2); 
    }
    await delayTime(delay2); 

    while (i < n1) {
        if ((n1+n2) === arr.length) {
            arr[k].style.backgroundColor = 'green';
        } else {
            arr[k].value = left[i];
            anim(arr[k], arr[k].value, 'lightgreen');  
            k++; 
            i++; 
            await delayTime(delay2); 
        }

    }

    while (j < n2) { 
        if ((n1+n2) === arr.length) {
            arr[k].style.backgroundColor = 'green';
        } else {
            arr[k].value = right[j]; 
            anim(arr[k], arr[k].value, 'lightgreen'); 
            k++; 
            j++; 
            await delayTime(delay2); 
        }
        
    }

}

async function mergeSort(arr, l, r) {
    if (l < r) {
        let m = Math.floor((l+r)/2)
        await mergeSort(arr, l, m); 
        await mergeSort(arr, m+1, r); 
        await merge(arr, l, m, r); 
    }
}

const mergeSortBtn = document.getElementById('merge-sort'); 
mergeSortBtn.addEventListener('click', async function() {
    let l = 0; 
    let r = children.length - 1; 
    disableBtn(); 
    await mergeSort(children, l, r); 
    enableBtn(); 
})