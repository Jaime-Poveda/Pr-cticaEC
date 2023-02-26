import { VideoSystem, VideoSystemController, VideoSystemView } from "./videoSystem/videoSystemApp.js";

$(function () {
    const StramingApp = new VideoSystemController(
        VideoSystem.getInstance(), new VideoSystemView()
    );

    const historyActions = {
        init: () => {
            StramingApp.handleInit();
        },
        singleCategory: (event) => {
            StramingApp.handleCategory(event);
        },
        singleProduction: (event) => {
            StramingApp.handleProduction(event);
        },
        singleActor: (event) => {
            StramingApp.handleActor(event);
        },
        singleDirector: (event) => {
            StramingApp.handleDirector(event);
        }
    }

    window.addEventListener('popstate', function (event) {
        if (event.state) {
			historyActions[event.state.action](event.state.category);
        }
    });

    history.replaceState({ action: "init" }, null);
});