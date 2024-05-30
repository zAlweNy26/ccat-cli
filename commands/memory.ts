import { defineCommand } from "citty"
import { callApi, cat } from "../utils"

export default defineCommand({
    meta: {
        name: "memory",
        description: "Manage the cat's long-term memory",
    },
    async run() {
        const res = await callApi(cat.memory.getCollections())
        console.log(res)
    }
})