"use strict";

// Input fields variables
const fairAmountEl = document.getElementById(`fair-input-field`);
const paxNumberEl = document.getElementById(`pax-input-field`);
const paidAmountEl = document.getElementById(`paid-input-field`);
const requiredAmountEl = document.getElementById(`required-input-field`);

// Buttons variables
const addGroupBtn = document.querySelector(`.btn-add-group`);
const clearGroupBtn = document.querySelector(`.btn-clear`);
const calculateBtn = document.querySelector(`.btn-calc`);

const paxTotalNumberEl = document.querySelector(".pax-total-Number");

const driverTotalEarningAmountEl = document.querySelector(`.driver-total-earning-amount`);
const paxTotalRequiredAmountEl = document.querySelector(`.pax-total-required-amount`);

const groupList = document.querySelector(".group-list");

const clearAllEl = document.querySelector(".btn-clear-all");
clearAllEl.addEventListener("click", function () {
	clearListUI();
	clearGroupInputs();
	resetVariables();
	fairAmountEl.value = null;
	driverTotalEarningAmountEl.textContent = "00.00";
	paxTotalRequiredAmountEl.textContent = "00.00";
	paxTotalNumberEl.textContent = "00";
	fairAmountEl.focus();
});
function resetVariables() {
	fairAmount = 0;
	driverTotalEarningAmount = 0;
	paxTotalRequiredAmount = 0;
	paxTotalNumber = 0;
	groups.clearAllEl;
	console.log(groups);
}
function clearListUI() {
	groupList.innerHTML = "";
}
clearListUI();
// Real values variables

let fairAmount = 0;
let driverTotalEarningAmount = 0;
let paxTotalRequiredAmount = 0;
let paxTotalNumber = 0;
let groups = [];

const group = {
	number: 0,
	paid: 0,
	required: 0,
};
function clearGroupInputs() {
	paxNumberEl.value = ``;
	paidAmountEl.value = ``;
	requiredAmountEl.value = ``;
	paxNumberEl.focus();
}

clearGroupBtn.addEventListener(`click`, clearGroupInputs);
const dynamicInputFields = [paxNumberEl, paidAmountEl, fairAmountEl];

dynamicInputFields.forEach((field) => {
	field.addEventListener("input", function () {
		let fieldValue = Number(field.value);
		if (fieldValue < 0) {
			field.value = Math.abs(fieldValue);
		}

		fairAmount = Number(fairAmountEl.value);

		const groupNumber = Number(paxNumberEl.value);
		const groupPaid = Number(paidAmountEl.value);
		let groupRequired = groupPaid - groupNumber * fairAmount;
		requiredAmountEl.value = groupRequired;
	});
});

addGroupBtn.addEventListener(`click`, function () {
	fairAmount = Number(fairAmountEl.value);

	const groupNumber = Number(paxNumberEl.value);
	let groupPaid = Number(paidAmountEl.value);
	// TODO if added the pax without the paid it is calculated automatically pax * seat fair as خالص
	groupPaid = groupPaid === 0 ? groupNumber * fairAmount : groupPaid;

	// calc the required amount for the group
	let groupRequired = groupPaid - groupNumber * fairAmount;
	// add the group to the groups array
	groups.push({
		number: groupNumber,
		paid: groupPaid,
		required: groupRequired,
	});
	paxTotalNumber += groupNumber;
	paxTotalNumberEl.textContent = paxTotalNumber;

	driverTotalEarningAmount += groupNumber * fairAmount;
	driverTotalEarningAmountEl.textContent = driverTotalEarningAmount.toFixed(2);
	console.log(driverTotalEarningAmountEl);

	paxTotalRequiredAmount += groupRequired;
	paxTotalRequiredAmountEl.textContent = paxTotalRequiredAmount.toFixed(2);
	console.log(paxTotalRequiredAmountEl);

	// if there is not required money don't add it
	if (groupRequired > 0) {
		const newItem = document.createElement("div");
		newItem.classList.add("group-item");
		newItem.innerHTML = `
    <div class="start-section">
            <div class="image-state">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M8.6 14.6L15.65 7.55L14.25 6.15L8.6 11.8L5.75 8.95L4.35 10.35L8.6 14.6ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="#22C55E"/>
                </svg>
            </div>
            <div class="group-item-content">
                <h3>Group <span class="group-number">${groups.length}</span> (${groupNumber} pax)</h3>
                <p>Paid: £ <span class="paid-amount">${groupPaid.toFixed(2)}</span></p>
            </div>
        </div>
        <div class="end-section">
            <p>£<span class="required-money">${groupRequired.toFixed(2)}</span></p>
            <button class="btn-done">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                    <path d="M2 16V2C2 2 2 2.37083 2 3.1125C2 3.85417 2 4.81667 2 6V12C2 13.1833 2 14.1458 2 14.8875C2 15.6292 2 16 2 16ZM2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V4.5H16V2H2V16H16V13.5H18V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM10 14C9.45 14 8.97917 13.8042 8.5875 13.4125C8.19583 13.0208 8 12.55 8 12V6C8 5.45 8.19583 4.97917 8.5875 4.5875C8.97917 4.19583 9.45 4 10 4H17C17.55 4 18.0208 4.19583 18.4125 4.5875C18.8042 4.97917 19 5.45 19 6V12C19 12.55 18.8042 13.0208 18.4125 13.4125C18.0208 13.8042 17.55 14 17 14H10ZM17 12V6H10V12H17ZM13 10.5C13.4167 10.5 13.7708 10.3542 14.0625 10.0625C14.3542 9.77083 14.5 9.41667 14.5 9C14.5 8.58333 14.3542 8.22917 14.0625 7.9375C13.7708 7.64583 13.4167 7.5 13 7.5C12.5833 7.5 12.2292 7.64583 11.9375 7.9375C11.6458 8.22917 11.5 8.58333 11.5 9C11.5 9.41667 11.6458 9.77083 11.9375 10.0625C12.2292 10.3542 12.5833 10.5 13 10.5Z" fill="white"/>
                </svg>
                Payout
            </button>
        </div>
    `;

		const payoutBtn = newItem.querySelector(".btn-done");
		payoutBtn.addEventListener("click", function () {
			newItem.classList.remove("animate__bounceIn");
			newItem.classList.add("animate__fadeOutRight");

			paxTotalRequiredAmount -= groupRequired;
			paxTotalRequiredAmountEl.textContent = paxTotalRequiredAmount.toFixed(2);

			newItem.addEventListener("animationend", () => {
				newItem.remove();

				if (paxTotalRequiredAmount == 0) {
					triggerSuccessConfetti();
				}
			});
		});

		groupList.appendChild(newItem);
		groupList.scrollTop = groupList.scrollHeight;
	}
	console.log(groups);
	clearGroupInputs();
});

function triggerSuccessConfetti() {
	confetti({
		particleCount: 150,
		spread: 70,
		origin: { y: 0.6 }, // Fires from slightly below the middle of the screen
		colors: ["#22C55E", "#ffffff", "#fbbf24"], // Optional: Matches your green theme
	});
}
function schoolPride() {
	var end = Date.now() + 2 * 1000; // 2 seconds of confetti

	(function frame() {
		confetti({
			particleCount: 2,
			angle: 60,
			spread: 55,
			origin: { x: 0 },
			colors: ["#c52245"],
		});
		confetti({
			particleCount: 2,
			angle: 120,
			spread: 55,
			origin: { x: 1 },
			colors: ["#c5a722"],
		});

		if (Date.now() < end) {
			requestAnimationFrame(frame);
		}
	})();
}
/* 
Features in this fare calculator

في المشروع ده جيه علشان يحل مشكلة  الناس اللي بتلم الاجره في المواصلات العامه 
خاصة ان فيه ناس كتير بتخاف تلم الاجره و كمان بيحصل لخبطه في انا اللي  معايا من فلوس دول حساب كام شخص
او هما باقيلهم كام 
خاصة لو الاجره رقم مش متعودين عليه زي 13 او 21 او ارقام كبيره او فيه كسور 17.5  وغيره
وكمان اوقات تحصل حسابات غلط واللي بيلم الاجره هو اللي بيتحمل العجز في الاجره رغم انه قد يكون ملهوش ذنب
المشاكل دي كلها بتواجه طلبة الجامعة خاصة 
والناس في المواصلات في العموم

فجات ليا من هنا فكرة المشروع ده 
لان لا ننسي ان حنا وظيفتنا كمهندسين برمجيات اننا نحل مشاكل الناس او  المشاكل اللي بتواجهنا احنا في حياتنا الشخصية

المشروع ده تم فيه مراعات حاجات كتيره  زي 
واهم حاجه السرعة انت بتكون عايز تنجز وتلم الاجره في اسرع وقت ممكن 
سهولة الاستخدام
اظهار بس المعلومات اللي محتاجها مش تكون الصفحة مليانه معلومات لا قيمة لها
بعض الاختصارات اللي هيتم ذكرها هتوفر عليك وقت جدا 

كفاية  كده تشويق ونخش في المميزات
اولا تقدر تدخل الاجره للفرد الواحد اول ما تبدأ
وبعد كده تدخل الاجره كام فرد فعه كام
ودي تم مراعاتها في ال layout لان 
علي سبيل المثال احنا كمصرين بنقول 3 من 50 
فده سبب لان عدد الافراد يكون قبل المبلغ اللي دفعته المجموعه دي 

ثانيا عملية الحساب بتكون realtime يعني
اثناء ما انت بتكتب عدد الافراد او المبلغ المدفوع او  سعر الاجره 
بيتم لحضيا حساب الباقي 
وده لغرض السرعه ولغرض  وانك مترجعش تدخل البيانات من الاول لو فيه تعديل 

بعد كده فيه زر ال clear في حالة ان المبلغ اللي دفعته المجموعه او عددهم كله هيتغير 
او مثلا نزله من المواصلة😅😂

وفي زر add group 
ممكن يكون فرد واحد عادي 
وده بيضيف الاجره للحسابات اللي معاك
وده بيعمل حاجتين 
لو الجروب  ليه باقي 
في جزي الخاص group list 
ده بيعمل لكل group card 
فيها عدد الافراد ودفعه كام وباقيلهم كام وكمان زر في حالة انك رجعتلهم الباقي

وز add group ده 
لو المجموعه ملهاش باقي مش هيضيفها لل grop list 
انت كواحد بتلم الاجره ميهمكش من الناس اللي دفعت الاجره مضبوط وملهمش باقي غير عددعم  غير كده مش هزاولك بيهم
فاالي بيتضاف بس اللي ليهم باقي

وبرضو اللي بيعمله add group 
ان دلوقي في خانتين من تحت بيورولك السواق ليه كام والفلوس اللي باقية للناس مجملا كام
وعدد الركاب اللي دفعه كام 
لان اوقات كتير الواحد بيحسب الفلوس علي عدد اقل من اللي دفعه فيظن ان فيه فلوس زايده او فلوس ناقصه  

وكل ما تسدد منهم حاجه  من  خلال payout 

بيتم خصم المبلغ ده من المجموع الباقي للناس

واخيرا فيه زر clear all لو هتمسح كل حاجه



وكمان لو في ناس دفعت الاجره كامله يعني 
انت بمجرد ما تدخل عددهم مش هتحتاج تدخل هما دفعه كام لو هما دفعه الاجره كامله 
انت بمرجرد ما تكتب عددهم , ثم تضغط  add group 
ده كله غرضه انا عايزك تعمل اقلل عدد من ال Clicks والادخال بحيث 
اككد مره اخره علي عامل السرعه


وفيه كده احتفالية بسيطه لو انت رجعت كل الباقي للناس حاجه كده مكافئة ليك علي انك ساعت الناس في الامر ده
فاحب اقولك من موقعي هذا شكرا😅🎆

اتمني فكرة المشروع تكون عجبتكم 
لو فيه ناس بتلم الاجره كتير خاصة الكرسي اللي ورا السواق
تقدر تعمل تثبيت لل link علي ال home page 
بحيث فورا تستخدمه 
واتمني اكون قدرت فيدكم  احب اسمع رأيكم في التعليقات  وشكرا
*/
