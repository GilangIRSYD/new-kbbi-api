"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const KbbiController_1 = require("../controllers/KbbiController");
const router = (0, express_1.Router)();
router.get("/", function (req, res) {
    res.status(200).json({
        message: "Welcome to New KBBI API",
        developer: "https://github.com/btrianurdin",
        endpoint: "/cari/[kosa kata]",
        // example: `${Config.baseUrl}/cari/demokrasi`,
    });
});
router
    .get("/cari/:kata", KbbiController_1.default.search);
exports.default = router;
//# sourceMappingURL=api.js.map