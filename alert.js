const maComming = () =>{
    alert('Ammu is comming ! open the Book');
}

const picnic = () =>{
    const response = confirm('Are going picnic');
    if(response === true){
        console.log('Pay your fee in my Bkash');

    }
    else{
        console.log('DGM ! dure giye mor');
    }
}

const askName = () =>{
    const name = prompt('Whats Your Name ?');
    if(name){
        console.log('Sultan');
    }
    else{
        console.log(name);
    }
}