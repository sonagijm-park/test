// src/services/aiService.ts

// 👇 [필수] 아까 그 '진짜 키'를 넣어주세요.
const API_KEY = 'AIzaSyD4o0pfifGooVseplc7Zp5eItKShLcwTwA';

export async function analyzeImage(imageFile: File): Promise<string> {
    console.log("🚀 Gemini 2.0 Flash 모델로 연결 시도...");

    try {
        // 1. 이미지를 Base64로 변환
        const base64Data = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result as string;
                resolve(result.split(',')[1]);
            };
            reader.onerror = reject;
            reader.readAsDataURL(imageFile);
        });

        // 2. [핵심] 리스트에서 확인된 'gemini-2.0-flash' 모델 사용!
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

        // 3. 요청 데이터 구성
        const requestBody = {
            contents: [{
                parts: [
                    { text: "당신은 2023년식 포드 레인저 전문 정비사입니다. 이 이미지를 분석해주세요. 계기판 경고등이라면 의미와 긴급도를, 부품이라면 이름과 권장 교체 주기를 한국어로 명확하게 설명해주세요. 답변은 간결하게 핵심만 추려서 Markdown 형식으로 작성해주세요." },
                    {
                        inline_data: {
                            mime_type: imageFile.type,
                            data: base64Data
                        }
                    }
                ]
            }]
        };

        // 4. 전송
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();

        // 5. 에러 확인
        if (!response.ok) {
            console.error("API Error Dump:", data); // 에러나면 콘솔에 자세히 보여줌
            throw new Error(data.error?.message || `HTTP Error: ${response.status}`);
        }

        // 6. 결과 추출
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!text) throw new Error("AI 응답이 비어있습니다.");

        return text;

    } catch (error) {
        console.error("Final Error:", error);
        if (error instanceof Error) {
            throw new Error(`분석 실패: ${error.message}`);
        }
        throw new Error("알 수 없는 오류");
    }
}