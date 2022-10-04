const express = require('express')
const router = new express.Router()
let list = require("./fakeDb")

router.get("/", (req, res) => {
    return res.json({list: list})
})


router.post("/", (req, res) => {
    items.push(req.query)
    return res.send({
        "added": req.query
    })
})
router.get("/:name", (req, res) => {
    for (let item of items) {
        if (item["name"] == req.params["name"]) {
            return res.json({
                "name": item["name"],
                "price": item["price"]
            })
        }
    }
    return res.json({
        "error": "item not found!"
    })
    
})
router.patch("/:name", (req, res) => {
    console.log(req.query)
    for (let item of items) {
        if (item["name"] == req.params["name"]) {
            let queryName = req.query["name"]
            let queryPrice = req.query["price"]
            item["name"] = queryName
            item["price"] = queryPrice
        }
    }
    return res.json({
        "update": {
            "name": req.query["name"],
            "price": req.query["price"]
        }
    })
})

router.delete("/:name", (req, res) => {
    console.log(req)
    for (let i = 0; i < items.length; i++) {
        if (items[i]["name"] == req.params["name"]) {
            items.splice(i, 1)

            return res.json({
                "message": "Deleted"
            })
        }
    }
    return res.json({
        "message": "no item to delete"
    })

    
})



module.exports = router;