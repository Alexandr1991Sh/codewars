try {
    if(console.log(1)){
        console.log(2)
    }else {
        throw new Error('Error')
    }
}catch {
    console.log(3)
}