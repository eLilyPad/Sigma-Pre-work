const log = (msg) => { console.log(msg) };
const d = new Date;
const today = new Date(d.getFullYear(), d.getMonth(), d.getDate())
const test_date_1 = new Date(1990, 01, 01)
const test_date_2 = new Date(1972, 12, 04)

//const target_date = ask_for_date()

//#region Tests

function day_test (day) {
	let entry = parseInt(day)
	return (is_num(entry) && entry <= 31)
}

function month_test (month) {
	let entry = parseInt(month)
	return (is_num(entry) && entry <= 12)
}

function year_test (year) {
	let entry = parseInt(year)
	return (is_num(entry) && entry >= 0)
}

function is_num(entry) {
	return (typeof entry == 'number' && !isNaN(entry))
}

//#endregion
//#region Decorations

//log('Welcome...')
//log('Enter any Date to find your how many years older you will be')
//log('Enter exit to end the program')

//#endregion
//#region Input

function tested_prompt(msg, test) {
	let input
	while (true) {
		input = prompt(msg)
		if(input == 'exit') {
			return null
		}
		else if (test(input)) {
			return input
		}
	}
}

function ask_for_date() {
	let day = tested_prompt('Enter a date:', day_test)
	let month = tested_prompt('Enter a month:', month_test)
	let year = tested_prompt('Enter a year:', year_test)
	rl.close();
	return new Date(year, month, day)
}

//#endregion

function age_from_dates(current_date, target_date) {
	log(`${current_date.getFullYear()} - ${target_date.getFullYear()}`)
	return current_date.getFullYear() - target_date.getFullYear(); 
}


log(`today: ${today.toLocaleDateString()}`)
//log(`Entered date: ${target_date.toLocaleDateString()}`)
log(`There is a ${age_from_dates(today, test_date_2)} year difference`)