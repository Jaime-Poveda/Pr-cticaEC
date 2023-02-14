import { VideoSystem, VideoSystemController, VideoSystemView } from "./videoSystem/videoSystemApp.js";

$(function () {
    const StramingApp = new VideoSystemController(
        VideoSystem.getInstance(), new VideoSystemView()
    );
})