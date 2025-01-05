// 메시지를 받으면 content.js 실행
chrome.runtime.onInstalled.addListener(() => {
    console.log("유데미 대본 복사기 확장이 설치되었습니다.");
});

// 필요에 따라 다른 이벤트 처리도 추가 가능
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "log") {
        console.log("백그라운드에서 받은 메시지:", message.data);
        sendResponse({ status: "success" });
    }
});
