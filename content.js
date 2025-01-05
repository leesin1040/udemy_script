(() => {
    try {
        // 텍스트 추출
        const elements = document.querySelectorAll('[data-purpose="cue-text"]');
        const transcriptText = Array.from(elements).map(el => el.textContent.trim()).join('\n');

        // 임시 textarea 엘리먼트 생성
        const textarea = document.createElement('textarea');
        textarea.value = transcriptText;
        document.body.appendChild(textarea);
        
        // 텍스트 선택 및 복사
        textarea.select();
        document.execCommand('copy');
        
        // 임시 엘리먼트 제거
        document.body.removeChild(textarea);
        
        alert("대본이 클립보드에 복사되었습니다!");
    } catch (err) {
        console.error("클립보드 복사 중 오류 발생:", err);
        alert("복사 중 오류가 발생했습니다.");
    }
})();
