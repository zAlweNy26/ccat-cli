import { defineCommand } from "citty"
import { callApi, cat } from "../utils"

export default defineCommand({
    meta: {
        name: "settings",
        description: "Manage general settings",
    },
    async run() {
        const res = await callApi(cat.settings.getSettings())
        console.log(res)
    }
})