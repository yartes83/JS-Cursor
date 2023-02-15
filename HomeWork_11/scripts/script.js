const getRandomChinese = async (length) => {
    try {
        let result = '';
        let sign;
        for (let i = 0; i < length; i++) {
            sign = Date.now().toString().slice(-5);
            result += String.fromCharCode(sign);
            await waiting();
        }
        console.log(result);
        return result;

    }catch (error) {
        console.log('Omg, error: ', result);
    }
}

function waiting() {
    return new Promise(resolve => setTimeout(resolve, 50));
}

getRandomChinese(10);



