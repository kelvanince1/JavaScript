// const jsSkill = {
//     knowsJS() {
//         return true;
//     }
// };

// const React = {
//     knowsReact() {
//         return true;
//     }
// };

// const jsEngineer = Object.assign({}, jsSkill, React);

// console.log(jsEngineer);


const humanFactory = function(obj) {
    let isCrying = false;

    return Object.assign({}, obj, {
        cry() {
            isCrying = true;
            return this;
        },
        isCrying() {
            return isCrying;
        }
    });
}

const flyFactory = function(obj) {
    let isFlying = false;

    return Object.assign({}, obj, {
        fly() {
            isFlying = true;
            return this;
        },
        isFlying() {
            return isFlying;
        }
    })
}
 
const superman = humanFactory(flyFactory({}));

console.log(superman.fly().cry().isCrying());
