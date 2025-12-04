import React, { useState } from 'react';
import { analyzeImage } from '../services/aiService';

const AIDiagnosis: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [analysisResult, setAnalysisResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
            setSelectedFile(file);
            setAnalysisResult(null);
            setError(null);
        }
    };

    const handleAnalyze = async () => {
        if (!selectedFile) return;
        setIsAnalyzing(true);
        setError(null);
        try {
            const result = await analyzeImage(selectedFile);
            setAnalysisResult(result);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Error");
        } finally {
            setIsAnalyzing(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-4 space-y-8">

            {/* 헤더 */}
            <div className="text-center border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                    🤖 AI 정비사
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                    사진을 업로드하여 고장 원인을 진단하세요.
                </p>
            </div>

            {/* 업로드 박스 */}
            <div className="max-w-md mx-auto">
                <div className="relative w-full h-64 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors overflow-hidden">

                    {selectedImage ? (
                        // [이미지 미리보기]
                        <div className="w-full h-full relative flex items-center justify-center bg-black/5">
                            <img
                                src={selectedImage}
                                alt="Preview"
                                className="max-w-full max-h-full object-contain"
                            />
                            <button
                                onClick={() => { setSelectedImage(null); setSelectedFile(null); }}
                                className="absolute top-2 right-2 p-2 bg-white rounded-full text-red-500 shadow-md"
                            >
                                ❌
                            </button>
                        </div>
                    ) : (
                        // [업로드 버튼] - 아이콘 대신 이모지 사용!
                        <label className="flex flex-col items-center justify-center w-full h-full cursor-pointer group">
                            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                                📸
                            </div>
                            <span className="text-lg font-bold text-gray-700">
                                사진 업로드
                            </span>
                            <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                        </label>
                    )}
                </div>

                {/* 분석 버튼 */}
                <button
                    onClick={handleAnalyze}
                    disabled={!selectedImage || isAnalyzing}
                    className={`mt-6 w-full py-3 rounded-xl font-bold text-white text-lg shadow-sm transition-all
            ${!selectedImage || isAnalyzing ? 'bg-gray-300' : 'bg-blue-600 hover:bg-blue-700'}`}
                >
                    {isAnalyzing ? "⏳ 분석 중..." : "🔍 진단 시작"}
                </button>

                {/* 결과창 */}
                {analysisResult && (
                    <div className="mt-10 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 whitespace-pre-wrap leading-relaxed">
                        <h3 className="text-lg font-bold mb-4 text-blue-600">📋 진단 결과</h3>
                        {analysisResult}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AIDiagnosis;