const txt =document.querySelector(".html-text");
console.log(txt);
const text = txt.innerHTML
    
console.log(`1. Количество символов в тексте: ${text.length}`);

const result = text.replace(";", "\n");
console.log(`2. Текст с переносами строк: \n ${result}`);

const substring = result.replace(/\s+/g, '');;
console.log(`3. Текст с удалёнными пробелами: ${substring}`);


const newText= result.slice(20,49);
console.log(`4. Извлечение подстроки: ${newText}`);


const replacedText= newText.replace("клён","дуб");
console.log(`5. Замена "клён" на "дубе": ${replacedText}`);


const replacedText2= result.toUpperCase();
console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);


const replacedText3= result.replace("клён","дуб");
console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`);

const index="моря".indexOf()
console.log(`8. Индекс первого вхождения "моря": ${index}`);

const modifiedText=replacedText.charAt(0).toUpperCase() + replacedText.slice(1);
console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);
/*не понимаю как это сделать*/

/*console.log(`1. Количество символов в тексте: ${text.length}`);
console.log(`2. Текст с переносами строк: \n ${result}`);
console.log(`3. Текст с удалёнными пробелами: ${substring}`);
console.log(`4. Извлечение подстроки: ${newText}`);
console.log(`5. Замена "клён" на "дубе": ${replacedText}`);
console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);
console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`);
console.log(`8. Индекс первого вхождения "моря": ${index}`);
console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);
*/