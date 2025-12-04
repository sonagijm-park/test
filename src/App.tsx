import React from 'react';
import Dashboard from './components/dashboard/Dashboard';
import AIDiagnosis from './components/AIDiagnosis';

// 이 파일은 우리 앱의 '현관문'입니다.
// 사용자가 들어오면 Dashboard(거실)로 바로 안내합니다.

function App() {
  const [activeTab, setActiveTab] = React.useState<'dashboard' | 'diagnosis'>('dashboard');

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      {/* 1. 상단 헤더 (네비게이션 바) */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              {/* 로고 대신 텍스트와 이모지 */}
              <span className="text-2xl">🛡️</span>
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                Ranger Guard
              </h1>
            </div>
            <div className="text-sm text-gray-500 hidden sm:block">
              For 2023 Ford Ranger (New Gen)
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex space-x-8 -mb-px">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`
                pb-4 px-1 border-b-2 font-medium text-sm transition-colors
                ${activeTab === 'dashboard'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
              `}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('diagnosis')}
              className={`
                pb-4 px-1 border-b-2 font-medium text-sm transition-colors
                ${activeTab === 'diagnosis'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
              `}
            >
              AI Mechanic (Beta)
            </button>
          </div>
        </div>
      </header>

      {/* 2. 메인 컨텐츠 영역 */}
      <main>
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {activeTab === 'dashboard' ? (
            <div className="animate-fade-in">
              <Dashboard />
            </div>
          ) : (
            <div className="animate-fade-in">
              <AIDiagnosis />
            </div>
          )}
        </div>
      </main>

      {/* 3. 하단 푸터 */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 text-center">
          <p className="text-sm text-gray-500">
            © 2025 Ranger Guard Project. Safe Driving in Philippines.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;