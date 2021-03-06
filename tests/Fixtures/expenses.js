import moment from "moment"

export default [
    {
        id: "1",
        description: "Gum",
        note: "",
        amount: 3,
        createdAt: 0
    },
    {
        id: "2",
        description: "Rent",
        note: "",
        amount: 2,
        createdAt: moment(0)
            .subtract(4, "days")
            .valueOf()
    },
    {
        id: "3",
        description: "Credit",
        note: "",
        amount: 1,
        createdAt: moment(0)
            .add(4, "day")
            .valueOf()
    }
]
