const free = 'free';
const pro = 'pro';
const vip = 'VIP';
let userStatus = 'pro';

if (userStatus !== free && userStatus === pro || userStatus === vip) {
    console.log(`Приятного перегладу)))`);
} else {
    console.log(`Нажаль ви не можете отримати доступ до контенту у вас ${free} підписка(((`);
};