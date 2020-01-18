export default expenses => expenses.map(el => el.amount).reduce((acc, curVal) => acc + curVal, 0)
